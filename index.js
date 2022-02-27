const { ShardingManager } = require('discord.js');
const child_process = require("child_process");
const path = require("path");
const fs = require("fs");
let consolelog = (text)=>{
    if(process.send){
        process.send(text)
    }
}
if(!fs.existsSync(path.resolve(__dirname,"./node_modules/ffmpeg-static/ffmpeg.exe"))){
    child_process.execSync(`npm install ffmpeg-static`);
    child_process.execSync(`node install.js`,{cwd:path.resolve(__dirname,"./node_modules/ffmpeg-static/")});
}
if(fs.existsSync('./settings/modules.json')){
    for (let index = 0; index < JSON.parse(fs.readFileSync('./settings/modules.json')).modules.length; index++) {
        try{require(JSON.parse(fs.readFileSync('./settings/modules.json')).modules[index])}catch{
             consolelog(`Installing ${JSON.parse(fs.readFileSync('./settings/modules.json')).modules[index]} module, please wait... `);
        child_process.execSync(`npm install ${JSON.parse(fs.readFileSync('./settings/modules.json')).modules[index]}`);
         consolelog(`${index+1}/${JSON.parse(fs.readFileSync('./settings/modules.json')).modules.length} modules installed`)
        }       
    }
}
if(fs.existsSync('./settings/modules.json')){
    for (let index = 0; index < JSON.parse(fs.readFileSync('./settings/modules.json')).modsmodules.length; index++) {
        try{require(JSON.parse(fs.readFileSync('./settings/modules.json')).modsmodules[index])}catch{
             consolelog(`Installing ${JSON.parse(fs.readFileSync('./settings/modules.json')).modsmodules[index]} module(required by a mod), please wait... `);
        child_process.execSync(`npm install ${JSON.parse(fs.readFileSync('./settings/modules.json')).modsmodules[index]}`);
         consolelog(`${index+1}/${JSON.parse(fs.readFileSync('./settings/modules.json')).modsmodules.length} modules installed`)
        }       
    }
}
try{
    require('discord.js');
}catch{
    consolelog(`Installing missing modules...`);
    child_process.execSync(`npm install`);
} 
try{
    require('better-sqlite3');
}catch{
    consolelog(`Installing missing modules...`);
    child_process.execSync(`npm install better-sqlite3`);
    consolelog(`You might need to restart the bot.`);
}
try{
    require('canvas');
}catch{
    consolelog(`Installing missing modules...`);
    child_process.execSync(`npm install canvas`);
    consolelog(`You might need to restart the bot.`);
}
try{
    require(path.resolve(__dirname,'./UserData/quick.db'));
}catch{
    consolelog(`Installing missing modules...`);
    child_process.execSync(`npm install`);
    consolelog(`You might need to restart the bot.`);
}
const manager = new ShardingManager('./bot.js', { token: require('./config.json').token,totalShards:"auto",respawn:false});

manager.on('shardCreate', shard => {shard.on("message",m=>{if(consolelog){consolelog(m)}})});
manager.spawn().catch((e) => {
    if(e.message && !e.message.includes("Cannot find module") && !e.message.includes("Shard")){
        consolelog({err:"Invalid token or intents are disabled"})
    }
});
process.on("message",m=>{
    for(let i = 0; i < manager.shards.toJSON().length; i++){
    if(m.status == "OFFLINE") {
        manager.shards.toJSON()[i].eval(`this.exit()`)
    }
    }
    if(m.status == "OFFLINE") {
        process.exit(0)
    }
})