module.exports = {
  name: "ping",
  category: "misc",
  description: "Get bot ping :/",
  usage: "ping",
  run: (client, message, del) => {
   message.delete();
    const Discord = require("discord.js")
    const em = new Discord.MessageEmbed()
    .setTitle("📡Check Your Ping📡")
    .setDescription(`=> PING: \`\`\`\n${client.ws.ping}\n\`\`\``)
    . setColor ("GREEN")
    .setTimestamp()
    message.channel.send(em).then(m => 
                                  { m.react("✅")
                                    m.react("🔒")
                                   ({timeout: 7000})});
  }
  
}
