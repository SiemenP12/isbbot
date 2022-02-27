const fs = require('fs');
const path = require('path');
module.exports = (client,Discord) =>{
    const command_files = fs.readdirSync(path.join(__dirname, '../commands/')).filter(file => file.endsWith('js'));
    for(const file of command_files){
        let command;
        try{
            command = eval("require(path.join(__dirname,`../commands/${file}`))");
        }catch(e){
            client.consolelog(`\n    ${e.stack}`)
        }
        if(command?.name){
            client.commands.set(command.name, command);
        }else{
            continue;
        }
    }
    const slash_command_files = fs.readdirSync(path.join(__dirname, '../slashcommands/')).filter(file => file.endsWith('js'));
    for(const file of slash_command_files){
        let command;
        try{
            command = eval("require(path.join(__dirname,`../slashcommands/${file}`))");
        }catch(e){
            client.consolelog(`\n    ${e.stack}`)
        }
        if(command?.name){
            client.slashcommands.set(command.name, command);
        }else{
            continue;
        }
    }
    const context_message_menus_files = fs.readdirSync(path.join(__dirname, '../contextmenus/')).filter(file => file.endsWith('js'));
    for(const file of context_message_menus_files){
        let contextmenu_message;
        try{
            contextmenu_message = eval("require(path.join(__dirname,`../contextmenus/${file}`))");
        }catch(e){
            client.consolelog(`\n    ${e.stack}`)
        }
        if(contextmenu_message?.name){
            client.contextmenus.set(contextmenu_message.name, contextmenu_message);
        }else{
            continue;
        }
    }
    const context_users_menus_files = fs.readdirSync(path.join(__dirname, '../contextmenususer/')).filter(file => file.endsWith('js'));
    for(const file of context_users_menus_files){
        let contextmenu_user;
        try{
            contextmenu_user = eval("require(path.join(__dirname,`../contextmenususer/${file}`))");
        }catch(e){
            client.consolelog(`\n    ${e.stack}`)
        }
        if(contextmenu_user?.name){
            client.contextmenus.set(contextmenu_user.name, contextmenu_user);
        }else{
            continue;
        }
    }
    const interaction_components_files = fs.readdirSync(path.join(__dirname, '../components/')).filter(file => file.endsWith('js'));
    for(const file of interaction_components_files){
        let component;
        try{
            component = eval("require(path.join(__dirname,`../components/${file}`))");
        }catch(e){
            client.consolelog(`\n    ${e.stack}`)
        }
        if(component?.name){
            client.interactioncomponents.set(component.name, component);
        }else{
            continue;
        }
    }
}