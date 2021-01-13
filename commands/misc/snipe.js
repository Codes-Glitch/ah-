const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "snipe",
  category: "misc",
  usage: "snipe",
  description: "get deleted messages",
  run:async (client, message, args) => {
    
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return message.channel.send("There are no deleted messages in this channel!").then(m=>{m.react("🔄")})
    const embed = new Discord.MessageEmbed()
    .setTitle("📋Snipe Message Delete📋")
  //  .setAuthor(msg.author)
    .setDescription(`=> Author: \`\`\`\n${msg.author}\n\`\`\`\n => Message Delete: \n\`\`\`\n${msg.content || "Tell That No Response To Embed"}\n\`\`\``)
    .setTimestamp()
    . setColor ("GREEN")
    if(msg.image)embed.setImage(msg.image)
    message.channel.send(embed).then(m => {

      m.react("✅")

      m.react("❌")

    })
    
  }
}
