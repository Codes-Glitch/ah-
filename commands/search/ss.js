const { Message, MessageEmbed } = require("discord.js");
//const { Default_Prefix, Color } = require("../../config.js");
const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const fetch = require("node-fetch");

const url = require("url");

module.exports = {
  name: "ss",
  aliases: ["screenshot"],
  category: "search",
  description: "Takes a screenshot of any webpage.",
  usage: "screenshot <URL>",
  run: async (client, message, args) => {
    message.delete()
    const db = require("quick.db");

  let channel = message.guild.channels.cache.find(x => x.name === db.get(`help`));

 message.channel.send(`Check Channel ${channel || `<a:failed:798526823976796161> Failed to Send` }`)

 
    const urls = args[0];
    if(!urls)return message.reply("```\nwhere is the link -_\n```")
   
    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );
      
      return channel.send(
        `\`\`\`\nHere is a screenshot from requested URL\n\`\`\` [Clink Here](${urls})`,
        {
          files: [{ attachment: body, name: "Screenshot-Houston-Greatest.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return channel.send("Could not find any results. Invalid URL?");
      return message.reply(
        `Oh no, an error occurred: \`${err.message}\`. Try again later!`
      );
    }
  }
};
