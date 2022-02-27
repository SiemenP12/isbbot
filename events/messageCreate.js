const fs = require('fs');

let dbwVars = {};
module.exports = async (Discord, client, message) => {
    if(message.author.id == client.user.id) return;
    let server
    let temp = {}
    message.author.lastMessage = message
    message.author.lastMessageId = message.id
    message.member ? message.member.lastMessage = message:undefined
    message.member ? message.member.lastMessageId = message.id:undefined
    if(message.guild){
        if(!client.servers.get(message.guild.id)){
            client.servers.set(message.guild.id,{id:message.guild.id})
        }
        server = client.servers.get(message.guild.id) 
    }else{
        if(!client.servers.get(message.channel.id)){
            client.servers.set(message.channel.id,{id:message.channel.id})
        }
        server = client.servers.get(message.channel.id)
    }
    
    let args = null;
    if(message.guild){
      if(client.userdata.fetch(`${message.guild.id}prefix`)){
    args = message.content.slice(client.userdata.fetch(`${message.guild.id}prefix`).length).trim().split(/ +/g);
      }else{
        args = message.content.slice(client.prefix.length).trim().split(/ +/g);
      }
  }else{
    if(client.userdata.fetch(`${message.author.id}prefix`)){
    args = message.content.slice(client.userdata.fetch(`${message.author.id}prefix`).length).trim().split(/ +/g);
      }else{
        args = message.content.slice(client.prefix.length).trim().split(/ +/g);
      }
  }
            dbwVars["CommandAuthor"] = message.author;
            dbwVars["CommandChannel"] = message.channel;
            dbwVars["CommandGuild"] = message.guild;
            dbwVars["Commands"] = client.commands.toJSON();
            dbwVars["SlashCommands"] = client.slashcommands.toJSON();
dbwVars["ContextMenus"] = client.contextmenus.toJSON();
            dbwVars["Bot"] = client.user;
            try{
                dbwVars["Bot"].prefix = client.userdata.fetch(`${message.guild.id}prefix`)||client.prefix
            }catch{
                dbwVars["Bot"].prefix = client.userdata.fetch(`${message.channel.id}prefix`)||client.prefix
            }
            client.message = message;
            client.dbwVars = dbwVars;

  if(message.guild){
      if(client.userdata.fetch(`${message.guild.id}prefix`)){
    args = message.content.slice(client.userdata.fetch(`${message.guild.id}prefix`).length).trim().split(/ +/g);
    if(!message.content.startsWith(client.userdata.fetch(`${message.guild.id}prefix`)) ) return;
      }else{
        args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    if(!message.content.startsWith(client.prefix) ) return;
      }
  }else{
    if(client.userdata.fetch(`${message.author.id}prefix`)){
    args = message.content.slice(client.userdata.fetch(`${message.author.id}prefix`).length).trim().split(/ +/g);
    if(!message.content.startsWith(client.userdata.fetch(`${message.author.id}prefix`)) ) return;
      }else{
        args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    if(!message.content.startsWith(client.prefix) ) return;
      }
  }
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    if(command){
        command.execute(client, message, args, Discord);
    }

}