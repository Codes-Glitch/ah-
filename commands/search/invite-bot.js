const Discord = require("discord.js");
const db = require("wio.db");
module.exports = {
  name: "inbot",
  category: "search",
  description: "Get bot link invite",
  usage: "ping",
  run: async (client, message, args, msss) => {
   message.delete();
  //  let annel = message.guild.channels.cache.find((x) => (x.name === ``))
 const db = require("quick.db");

  let channel = message.guild.channels.cache.find(x => x.name === db.get(`inbot`));

 message.channel.send(`Check Channel ${channel || `<a:failed:798526823976796161> Failed to Send` }`)

 
    const msgg = args.join(" ");
   const ar = args
    if (!msgg) return message.channel.send("Please Give ID Bot");
    if (msgg.length > 18) return message.channel.send("<a:failed:798526823976796161> Too Long ID - 18 Limit");
    if (isNaN(msgg))return message.reply("<a:failed:798526823976796161> This is not an ID")  
  //await message.channel.send("Check Channel")
  //return message.channel.send("Check Channel")
   
    //await message.channel.send("Check Channel")
 return channel.send(`<a:success:798526789114134548> the Bot link is [Clink di sini](https://discord.com/oauth2/authorize?client_id=${ar}&scope=bot&permissions=8)`).then(m => {
      m.react("✅")
      m.react("❌")
    })
  //   await annel.send(`link Botnya adalah [Clink di sini](https://discord.com/oauth2/authorize?client_id=${ar}&scope=bot&permissions=8)`)

 
  
     }

};