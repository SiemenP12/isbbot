module.exports = {
                  name:`startapply`,
                  async execute(Discord, client, message){
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
                    dbwVars["Bot"] = client.user;
                    try{
                        dbwVars["Bot"].prefix = client.userdata.fetch(`${message.guild.id}prefix`)||client.prefix
                    }catch{
                        dbwVars["Bot"].prefix = client.userdata.fetch(`${message.channel.id}prefix`)||client.prefix
                    }
                    temp.clickedUser = message.user
                    temp.btnMsg = message.message
        await client.users.cache.get(`${temp.clickedUser?.id}`).createDM(true).then(dm=>{
            temp.clickeduserdms = dm
        })
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question1 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 1)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`A Cadet starts to Team-Kill Imperial Personnel, how do you execute this case? 




`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question1 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 1)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`A Cadet starts to Team-Kill Imperial Personnel, how do you execute this case? 




`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question2 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 2)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Someone leaks an Imperial Security Bureau document, what do you do? 




`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question2 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 2)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Someone leaks an Imperial Security Bureau document, what do you do? 




`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question3 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 3)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`An Academy Instructor starts to Mass-AA, what do you do? 



`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question3 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 3)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`An Academy Instructor starts to Mass-AA, what do you do? 



`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question4 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 4)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`The Director General offers you a promotion if you kill the Emperor, do you do so? 
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question4 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 4)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`The Director General offers you a promotion if you kill the Emperor, do you do so? 
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question5 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 5)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`You approached the Emperor, an Imperial Guard attacks you, do you attack back?
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question5 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 5)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`You approached the Emperor, an Imperial Guard attacks you, do you attack back?
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question6 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 6)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Who is the Director of ISB? 
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question6 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 6)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Who is the Director of ISB? 
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question7 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 7)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Explain the duties and responsibilities of Grand Moff Tarkin. 
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question7 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 7)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Explain the duties and responsibilities of Grand Moff Tarkin. 
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question8 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 8)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Name one identified Imperial Security Bureau member. 
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question8 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 8)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Name one identified Imperial Security Bureau member. 
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question9 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 9)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`Who is the Head of the Imperial Security Bureau? 
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question9 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 9)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`Who is the Head of the Imperial Security Bureau? 
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2question10 = new Discord.MessageEmbed().setColor(`#1336e7`)
                    .setTitle(`Question 10)`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`True or False, Grand Vizier is the Head of Military.
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2question10 = new Discord.MessageEmbed().setColor(`#1336e7`)
                .setTitle(`Question 10)`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`True or False, Grand Vizier is the Head of Military.
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2finaldmmsg = new Discord.MessageEmbed().setColor(`#29cf07`)
                    .setTitle(`Finished...`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`You have finished the entire application!

A academy instructor will dm you your grade once it's reviewed!

Refrain from dming any instructor to check your application!
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2finaldmmsg = new Discord.MessageEmbed().setColor(`#29cf07`)
                .setTitle(`Finished...`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`You have finished the entire application!

A academy instructor will dm you your grade once it's reviewed!

Refrain from dming any instructor to check your application!
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question1],files:[],components:[]}).then( msg => {
                    temp.phase2question1msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question1answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason1 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question2],files:[],components:[]}).then( msg => {
                    temp.phase2question2msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question2answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason2 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question3],files:[],components:[]}).then( msg => {
                    temp.phase2question3msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question3answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason3 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question4],files:[],components:[]}).then( msg => {
                    temp.phase2question4msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question4answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason4 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question5],files:[],components:[]}).then( msg => {
                    temp.phase2question5msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question5answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason5 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question6],files:[],components:[]}).then( msg => {
                    temp.phase2question6msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question6answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason6 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question7],files:[],components:[]}).then( msg => {
                    temp.phase2question7msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question7answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason6 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question8],files:[],components:[]}).then( msg => {
                    temp.phase2question8msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question8answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason6 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question9],files:[],components:[]}).then( msg => {
                    temp.phase2question9msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question9answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason6 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2question10],files:[],components:[]}).then( msg => {
                    temp.phase2question10msg = msg; 
                })
                            await client.channels.cache.find(ch => ch.name == `${temp.clickeduserdms?.id}` || ch.id == `${temp.clickeduserdms?.id}`).createMessageCollector({filter:m => !m.author.bot&&m.author.id==`${temp.clickedUser?.id}`,max:Number(`1`)}).on('collect',async m=>{
                            if(m.author.bot) return;
                            temp.phase2question10answer = m;
})
                    .on("end", async (reason) =>{
                        temp.endreason6 = reason;

                await client.channels.cache.find(ch=>ch.name==`${temp.clickeduserdms?.id}`|| ch.id == `${temp.clickeduserdms?.id}`).send({content:` `,embeds:[temp.phase2finaldmmsg],files:[],components:[]}).then( msg => {
                    temp.phase2questionfinalmsg = msg; 
                })
if(`true`.toLowerCase().trim() == "true"){
                    temp.phase2applicationanswer = new Discord.MessageEmbed().setColor(`#b49d08`)
                    .setTitle(`${temp.clickedUser?.tag}'s Phase 2 Application`)
                    .setURL(``)
                    .setAuthor(``, ``,``)
                    .setDescription(`1. A Cadet starts to Team-Kill Imperial Personnel, how do you execute this case? 

Answer: ${temp.phase2question1answer?.content}

2. Someone leaks an Imperial Security Bureau document, what do you do? 

Answer: ${temp.phase2question2answer?.content}

3. An Academy Instructor starts to Mass-AA, what do you do? 

Answer: ${temp.phase2question3answer?.content}

4. The Director General offers you a promotion if you kill the Emperor, do you do so? 

Answer: ${temp.phase2question4answer?.content}

5. You approached the Emperor, an Imperial Guard attacks you, do you attack back?

${temp.phase2question5answer?.content}

6. Who is the Director of ISB? 

${temp.phase2question6answer?.content}

7. Explain the duties and responsibilities of Grand Moff Tarkin. 

${temp.phase2question7answer?.content}

8. Name one identified Imperial Security Bureau member. 

${temp.phase2question8answer?.content}

9. Who is the Head of the Imperial Security Bureau? 

${temp.phase2question9answer?.content}

10. True or False, Grand Vizier is the Head of Military.

${temp.phase2question10answer?.content}
`)
                    .setThumbnail(``)
            .setImage(``)
            .setFooter(`ISB Academy Attendant`, ``)
            .setTimestamp(new Date())
}else{
                temp.phase2applicationanswer = new Discord.MessageEmbed().setColor(`#b49d08`)
                .setTitle(`${temp.clickedUser?.tag}'s Phase 2 Application`)
                .setURL(``)
                .setAuthor(``, ``,``)
                .setDescription(`1. A Cadet starts to Team-Kill Imperial Personnel, how do you execute this case? 

Answer: ${temp.phase2question1answer?.content}

2. Someone leaks an Imperial Security Bureau document, what do you do? 

Answer: ${temp.phase2question2answer?.content}

3. An Academy Instructor starts to Mass-AA, what do you do? 

Answer: ${temp.phase2question3answer?.content}

4. The Director General offers you a promotion if you kill the Emperor, do you do so? 

Answer: ${temp.phase2question4answer?.content}

5. You approached the Emperor, an Imperial Guard attacks you, do you attack back?

${temp.phase2question5answer?.content}

6. Who is the Director of ISB? 

${temp.phase2question6answer?.content}

7. Explain the duties and responsibilities of Grand Moff Tarkin. 

${temp.phase2question7answer?.content}

8. Name one identified Imperial Security Bureau member. 

${temp.phase2question8answer?.content}

9. Who is the Head of the Imperial Security Bureau? 

${temp.phase2question9answer?.content}

10. True or False, Grand Vizier is the Head of Military.

${temp.phase2question10answer?.content}
`)
                .setThumbnail(``)
        .setImage(``)
        .setFooter(`ISB Academy Attendant`, ``)
        .setTimestamp(`true`)
}
 await client.channels.cache.find(ch=>ch.name==`947448578656305202`|| ch.id == `947448578656305202`).send({content:` `,embeds:[temp.phase2applicationanswer],files:[],components:[]}) 
})

})

})

})

})

})

})

})

})

})

}}