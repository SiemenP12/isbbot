
            
            module.exports = async (Discord, client, invite) => {
                if(!client.servers.get(invite.guild.id)){
                    client.servers.set(invite.guild.id,{id:invite.guild.id})
                }
                let server = client.servers.get(invite.guild.id)
                let temp = {}
                let dbwVars;
                    let message;
                    if(client.message){
                        message = client.message;
                        if(client.dbwVars){
                            dbwVars = client.dbwVars;
                        }
                    }
                    client.invites.set(invite.guild.id,await client.fetch(invite.guild.id))
            
}