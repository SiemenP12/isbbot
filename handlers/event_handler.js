const fs = require('fs');
const path = require('path');
module.exports = (client, Discord)=>{
        const event_files = fs.readdirSync(path.join(__dirname,`../events`)).filter(file => file.endsWith('.js'));

        for (const file of event_files){
            let event
            try{
                event = eval("require(path.join(__dirname,`../events/${file}`))");
            }catch(e){
                client.consolelog(`\n    ${e.stack}`)
            }
                const event_name = file.split('.')[0];
                client.on(event_name, event?.bind(null, Discord, client));
        }
};