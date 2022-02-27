
            
           
            module.exports = async (Discord, client) => {
                
                client.consolelog(`${client.user.tag} is now online!`)
                let server = global;
                let temp = {}
                client.invites = new Map()
                try{
                    await client.guilds.cache.forEach(async guild=>{
                        await client.fetch(guild.id)
                         .then(invites=>client.invites.set(guild.id,invites))
                         .catch(function (err) {
                             return
                         })
                })
                }catch{
                    return
                }
                if(client.slashcommands.size > 0){
                    client.consolelog(`Loading slash commands...`);
                }
                let data = [];
                for (let index = 0; index < await client.slashcommands.size; index++) {
                    const element = await client.slashcommands.toJSON()[index];
                    data.push({
                        name:element.name,
                        description:element.description,
                        options:JSON.parse(require('fs').readFileSync('./Options_collector.json'))[element.name+'.js']
                    })
                }

                for (let index = 0; index < await (await client.api.applications(await client.user.id).commands.get()).length; index++) {
                    const element = await (await client.api.applications(await client.user.id).commands.get())[index];
                    if(!client.slashcommands.find(cmd=>cmd.name == element.name)){
                        await client.api.applications(await client.user.id).commands(element.id).delete();
                    }
                }
                
                if(client.slashcommands.size > 0){
                    client.consolelog(`Done!`);
                }    
                if(client.contextmenus.size > 0){
                    client.consolelog(`Loading context menus...`);
                }
                for (let index = 0; index < client.contextmenus.size; index++) {
                    const element = client.contextmenus.toJSON()[index];
                    data.push({
                        name:element.name,
                        type:element.type
                    })
                }

                for (let index = 0; index < (await client.api.applications(client.user.id).commands.get()).length; index++) {
                    const element = (await client.api.applications(client.user.id).commands.get())[index];
                    if(!client.contextmenus.find(cmd=>cmd.name == element.name) && element.type == (2||3)){
                        await client.api.applications(client.user.id).commands(element.id).delete();
                    }
                }

                if(client.contextmenus.size > 0 && client.slashcommands.size > 0){
                    client.consolelog(`Done!`);
                    await client.api.applications(client.user.id).commands.put({data:data})
                }else if(client.contextmenus.size > 0){
                    client.consolelog(`Done!`);
                    await client.api.applications(client.user.id).commands.put({data:data})
                }else if(client.slashcommands.size > 0){
                    await client.api.applications(client.user.id).commands.put({data:data})
                }
await client.user.setStatus(String(`Online`).toLowerCase())
await client.user.setActivity(`ISB Director`, { type: String(`Listening`).trim().toUpperCase() });
}