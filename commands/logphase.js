module.exports = {
                name: `logphase`,
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
            
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947370712098799626` || r.name === `947370712098799626`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947228426203439155` || r.name === `947228426203439155`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947228192702345278` || r.name === `947228192702345278`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947228192702345278` || r.name === `947228192702345278`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947227872861495316` || r.name === `947227872861495316`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947227421118189630` || r.name === `947227421118189630`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947225481906888805` || r.name === `947225481906888805`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947225036606046288` || r.name === `947225036606046288`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
if(client.guilds.cache.get(`${dbwVars.CommandGuild?.id}`).members.cache.get(`${dbwVars.CommandAuthor?.id}`).roles.cache.some(r => r.id === `947227421118189630` || r.name === `947227421118189630`)){
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}else{
}
}
}
}
}
}
}
        temp.host = await message.mentions.users.toJSON()[0];
            temp.eventtype = await client.parseString(args[1]);
            temp.attendees = await client.parseString(args[2]);
            temp.passers = await client.parseString(args[3]);
            temp.proof = await client.parseString(args[4]);
if(`true`.toLowerCase().trim() == "true"){
                    temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                    .setTitle(`Phase Log:`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phaselogmsg = new Discord.MessageEmbed().setColor(`#1147c5`)
                .setTitle(`Phase Log:`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Host: ${temp.host?.tag}
Phase: ${temp.eventtype}
Attendees: ${temp.attendees}
Passers: ${temp.passers}
Proof: ${temp.proof}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947222152053137449`|| ch.id == `947222152053137449`).send({content:` `,embeds:[temp.phaselogmsg],files:[],components:[]}) 
}
}
}}