module.exports = {
                name: `phaseloghelp`,
                description:  `none`,
                slash:'false',
                contextmenu:'false',
                async execute(client, message, args, Discord) {
                if(message.author.bot != false) return;
                let server
                let temp = {}
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
                let dbwVars = {}
                dbwVars["CommandAuthor"] = message.author;
                dbwVars["CommandChannel"] = message.channel;
                dbwVars["CommandGuild"] = message.guild;
                dbwVars["Commands"] = client.commands.toJSON();
                dbwVars["SlashCommands"] = client.slashcommands.toJSON();
dbwVars["ContextMenus"] = client.contextmenus.toJSON();
                dbwVars["Command"] = this;
                dbwVars["Bot"] = client.user;
                try{
                    dbwVars["Bot"].prefix = client.userdata.fetch(`${message.guild.id}prefix`)||client.prefix
                }catch{
                    dbwVars["Bot"].prefix = client.userdata.fetch(`${message.channel.id}prefix`)||client.prefix
                }
            
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947227421118189630` || r.name === `947227421118189630`)){
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaseloghelpmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log Help`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`In order to log a phase execute this command in the instructor bot commands channel:

!logphase (Ping Host or Yourself) (EventType: 1,2,3...) (Write Attendees usernames) (Write passers usernames) (Send proof in link form)

Example: !logphase @chilhoek 1 chilhoek,builderman builderman linkhere

**NOTE!** If you have proof as a file send the image in a channel and open original with the discord feature, then copy the newly opened tab's webadres and paste it as a link.

**NOTE2** Never do spaces unless you want to switch logging part for example never do: chilhoek, builderman for attendees, do chilhoek,builderman
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaseloghelpmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log Help`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`In order to log a phase execute this command in the instructor bot commands channel:

!logphase (Ping Host or Yourself) (EventType: 1,2,3...) (Write Attendees usernames) (Write passers usernames) (Send proof in link form)

Example: !logphase @chilhoek 1 chilhoek,builderman builderman linkhere

**NOTE!** If you have proof as a file send the image in a channel and open original with the discord feature, then copy the newly opened tab's webadres and paste it as a link.

**NOTE2** Never do spaces unless you want to switch logging part for example never do: chilhoek, builderman for attendees, do chilhoek,builderman
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaseloghelpmsg],files:[],components:[]}) 
}else{
}
}}