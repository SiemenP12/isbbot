const fs = require('fs');
const child_process = require('child_process');
const Discord = require('discord.js');
let client;
if(fs.existsSync('./intents.json')){
    if(JSON.parse(fs.readFileSync("./intents.json")).intents[0] == "ALL"){
        client = new Discord.Client({  partials:['CHANNEL','GUILD_MEMBER','MESSAGE','REACTION','USER'], intents: ["GUILDS","GUILD_MEMBERS","GUILD_BANS","GUILD_EMOJIS_AND_STICKERS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING"] } );
    }else{
        client = new Discord.Client({  partials:['CHANNEL','GUILD_MEMBER','MESSAGE','REACTION','USER'], intents:  JSON.parse(fs.readFileSync("./intents.json")).intents} );
    }
}else{
    client = new Discord.Client({  partials:['CHANNEL','GUILD_MEMBER','MESSAGE','REACTION','USER'], intents: ["GUILDS","GUILD_MEMBERS","GUILD_BANS","GUILD_EMOJIS_AND_STICKERS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING"]} );
}
const path = require('path');
const SHClient = require(path.resolve(__dirname,'./Shandler'))
const { prefix, token } = require(path.resolve(__dirname,'./config.json'));
client.prefix = prefix;
client.circularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof(value) === "object" && value !== null) {
        if (seen.has(value)) {
                 return;
             }
             seen.add(value);
       }
       return value;
   };
};
client.parseString = (int)=>{
    if(!isNaN(Number(int))){
        return Number(int)
    }else if(isNaN(Number(int))&&String(int).replace(/\s/g,"")[0]!="["&&String(int).replace(/\s/g,"")[String(int).replace(/\s/g,"").length-1]!="]"&&String(int).replace(/\s/g,"")[0]!="{"&&String(int).replace(/\s/g,"")[String(int).replace(/\s/g,"").length-1]!="}"){
        return String(int)
    }else if(String(int).replace(/\s/g,"")[0]=="["&&String(int).replace(/\s/g,"")[String(int).replace(/\s/g,"").length-1]=="]"){
        try{
            int = JSON.parse(int)
            int.constructor.prototype.toString = () => {
                return require('lossless-json').stringify(int)
            }
            int.forEach(i=>{
                i.constructor.prototype.toString = () => {
                    return require('lossless-json').stringify(i)
                }
            })
        }catch{
            int = int.substring(1, int.length-1).split(",")
            int.constructor.prototype.toString = () => {
                return require('lossless-json').stringify(int)
            }
            int.forEach(i=>{
                i.constructor.prototype.toString = () => {
                    return require('lossless-json').stringify(i)
                }
            })
        }
        return int
    }else if(String(int).replace(/\s/g,"")[0]=="{"&&String(int).replace(/\s/g,"")[String(int).replace(/\s/g,"").length-1]=="}"){
        int = JSON.parse(int)
        int.constructor.prototype.toString = () => {
            return require('lossless-json').stringify(int)
        }
        return int
    }else{
        return int
    }
}
client.fetch = (id)=>{
    return client.api
    .guilds(id)
    .invites.get()
    .then(inviteItems => {
      const invites = new Discord.Collection();
      for (const inviteItem of inviteItems) {
        const invite = new Discord.Invite(client, inviteItem);
        invites.set(invite.code, invite);
      }
      return invites;
    });
}
client.servers = new Discord.Collection()
client.commands = new Discord.Collection();
client.slashcommands = new Discord.Collection();
client.contextmenus = new Discord.Collection();
client.interactioncomponents = new Discord.Collection();
client.events = new Discord.Collection();
const handler = new SHClient(client, {
    showLogs: null,
    wrapper: true
});
const { Player } = require(path.resolve(__dirname,"./Music"));
client.functions = require(path.resolve(__dirname,"./Functions.js"));
const player = new Player(client, {
    leaveOnEmpty: true,
    quality: 'high', 
});
client.player = player;
client.consolelog = (text)=>{
    console.log(text)
    if(process.send){
        process.send(text);
    }
}
client.canvas = require("canvas")
client.measure = (canvas,text,fontsize,font,value) =>{
    const context = canvas.getContext('2d');
    context.font = `${fontsize} "${font}"`;
    if(context.textAlign != 'center'){
        do {
            context.font = `${fontsize -= 1} "${font}"`;
        } while (context.measureText(text).width > canvas.width - value);
    }else{
        do {
            context.font = `${fontsize -= 1} "${font}"`;
        } while (context.measureText(text).width > canvas.width);
    }
	return context.font;
}
client.parseBoolean = function(value, nullOnFailure = false){
    switch(value){
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            value = true;
            break;
        case false:
        case 'false':
        case 0:
        case '0':
        case 'off':
        case 'no':
            value = false;
            break;
        default:
            if(nullOnFailure){
                value = null;
            }else{
                value = false;
            }
            break;
    }
    return value;
};

client.userdata = require(path.resolve(__dirname,'./UserData/quick.db'))
if(fs.existsSync('./fonts')){
    fs.readdirSync("./fonts").forEach(font=>{
        require("canvas").registerFont(path.resolve(__dirname, `./fonts/${font}`),{family: font.replace(/\.(.*?)$/g,"")})
    })
}

['command_handler', 'event_handler'].forEach(handler =>{
	require(`${__dirname}/handlers/${handler}.js`)(client, Discord);
})
client.exit = () => {
    try {
        client.emit('onExit')
        client.destroy();
        process.exit(0);
    } catch (error) {
        client.consolelog(error);
    }
}
client.on('buttonClick',async interaction=>{
    client.interactioncomponents.get(interaction.data.custom_id).execute(Discord, client, interaction)
})
handler.on('interaction', async (interaction)=>{
    var args = interaction.data.name;
    var Canvas = require('canvas');
        interaction["author"] = interaction.user
    try{
        interaction["guild"] = client.guilds.cache.get(interaction.guild.id) 
    }catch{
        interaction["guild"] = undefined
    }
    try{
        interaction["member"] = client.guilds.cache.get(interaction.guild.id).members.cache.get(interaction.author.id)
    }catch{
        interaction["member"] = undefined
    }
    interaction["channel"] = interaction.channel || await interaction.author.createDM()
    interaction['content'] = interaction.data.name
    var dbwVars = {};
    try{
        dbwVars[interaction.guild.id] = {}
        dbwVars = dbwVars[interaction.guild.id]
    }catch{
        dbwVars[interaction.channel.id] = {}
        dbwVars = dbwVars[interaction.channel.id]
    }
    dbwVars["CommandAuthor"] = interaction.author;
    dbwVars["CommandChannel"] = interaction.channel;
    dbwVars["CommandGuild"] = interaction.guild;
    dbwVars["Commands"] = client.commands.toJSON();
    dbwVars["SlashCommands"] = client.slashcommands.toJSON();
        try{
        dbwVars["Bot"] = {"prefix":client.userdata.fetch(`${interaction.guild.id}prefix`)||prefix}
        }catch{
            dbwVars["Bot"] = {"prefix":client.userdata.fetch(`${interaction.channel.id}prefix`)||prefix}
        }
        client.interaction = interaction;
        client.dbwVars = dbwVars;
    client.message = interaction;
    client.dbwVars = dbwVars;
    interaction.constructor.prototype.toString = () =>{
        return require('lossless-json').stringify(interaction,client.circularReplacer())
    } 
    if(interaction.data.type == 1){
        try{
            await client.slashcommands.get(interaction.data.name).execute(client, interaction, args, Discord, Canvas);
        }catch(e){
            client.consolelog(e)
            client.api.interactions(interaction.id,interaction.token).callback.post({
                data:{
                    type: 4,
                    data:{
                        flags:64,
                        content:`Command doesn't exist anymore!`
                    }
                }
            })
        }
    }else if(interaction.data.type == 2 || interaction.data.type == 3){
        try{
            await client.contextmenus.get(interaction.data.name).execute(client, interaction, args, Discord, Canvas);
        }catch(e){
            client.consolelog(e)
            client.api.interactions(interaction.id,interaction.token).callback.post({
                data:{
                    type: 4,
                    data:{
                        flags:64,
                        content:`Context menu doesn't exist anymore!`
                    }
                }
            })
        }
    }
    })
    client.on("guildMemberUpdate",(old,newm)=>{
        if(!old.premiumSince&&newm.premiumSince){
            client.emit("serverBoost",newm)
        }
    })
    client.on('guildMemberRemove', async member =>{
        try{
        const banLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        const banned = banLogs.entries.first();
        if(!banLogs || banned.target.id != member.id){
            const fetchedLogs = await member.guild.fetchAuditLogs({
                limit: 1,
                type: 'MEMBER_KICK',
            });
            const kickLog = fetchedLogs.entries.first();
            if (!kickLog) return client.emit('memberLeave', member)
            const { target } = kickLog;
            if (target.id === member.id) {
                client.emit('memberKick', member)
            }else{
                client.emit('memberLeave', member)
            }
        }
        }catch{
            client.emit('memberLeave', member)
        }
    })
    client.on("ready",()=>{
        if(fs.existsSync("./mods")){
            let mods = fs.readdirSync("./mods")
            mods.filter(m=>m.endsWith(".js")).forEach(modfile=>{
                try {
                    let mod = require(path.resolve(__dirname,`./mods/${modfile}`))
                    mod.onLoad(client)   
                } catch (error) {
                    return
                }
            })
        }
    })
    client.on("rateLimit", rateLimitInfo => {
        client.consolelog(`\n    DiscordAPIError: RateLimit
        max: ${rateLimitInfo.limit} requests
        timeout: ${rateLimitInfo.timeout/1000}s
        request: ${rateLimitInfo.route}`)
    })
    process.on('unhandledRejection', error => {
        client.consolelog(`\n    ${error.stack}`)
    });
    client.login(token)
process.on('SIGINT', () =>{
    client.exit();
})
process.on("SIGHUP", ()=>{
    client.exit()
});
process.on("message", (msg) => {
    if (msg.status === "OFFLINE") {
        client.exit();
    }
});