module.exports = {
                name: `sendapplication`,
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
                    temp.startbutton = new Discord.MessageButton()
                            .setCustomId(`startapply`)
                            .setLabel(`Start!`)
                            .setStyle(Number(`1`))
                            .setDisabled(`false`)
                    
            temp.startbuttonrow = new Discord.MessageActionRow()
            temp.startbuttonrow.addComponents([temp.startbutton])
if(`true`.toLowerCase().trim() == "true"){
                    temp.isbapplicationmessage = new Discord.MessageEmbed().setColor(`#05ccab`)
                    .setTitle(`Phase 2 I Application`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Click the button below to start the application!
Make sure to fill in all questions as detailed as possible.

Good Luck!
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.isbapplicationmessage = new Discord.MessageEmbed().setColor(`#05ccab`)
                .setTitle(`Phase 2 I Application`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Click the button below to start the application!
Make sure to fill in all questions as detailed as possible.

Good Luck!
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}

                await client.channels.cache.find(ch=>ch.name==`${dbwVars.CommandChannel?.id}`|| ch.id == `${dbwVars.CommandChannel?.id}`).send({content:` `,embeds:[temp.isbapplicationmessage],files:[],components:[temp.startbuttonrow]}).then( msg => {
                    temp.applicationmessage = msg; 
                })
}else{
}
}}