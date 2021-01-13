const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "sethelpmsg",
  descriptions: "",
  usage: "sethelpmsg <channel> do not use `#`",
  category: "settings",
  run: async (client, message, args) => {
    
    //OWNER ONLY COMMAND
    if(!message.author.id === `${message.guild.ownerID}`) {
      return message.channel.send("This command can only be used by owner").then(m=>m.delete({timeout:9000}).catch(e=>{}))
    }
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give Name Channel and do not use #").then(m=>m.delete({timeout:9000}).catch(e=>{}))
    }
      let channel = message.mentions.channels.first()

  
 db.set(`help`, args.join(" "))
   await message.channel.send(`messaga has been set channel ${args[0]}\nCommand is loading 15s`).then(m=>m.delete({timeout:10000}).catch(e=>{}))
    process.exit(1);
    
  }
}