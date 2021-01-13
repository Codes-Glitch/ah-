const { MessageEmbed } = require("discord.js");

const math = require("mathjs");

const Color = `RANDOM`;

module.exports = {

  name: "math",

  category: "Fun",

  run: async (client, message, args) => {
message.delete();
   const db = require("quick.db");

  let channel = message.guild.channels.cache.find(x => x.name === db.get(`help`));

 message.channel.send(`Check Channel ${channel || `<a:failed:798526823976796161> Failed to Send` }`)

 
    
    try {

      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()

        .setColor(`${Color}`)

        .setTitle(`Result`)

        .setDescription(math.evaluate(args.join(" ")))

        .setTimestamp();

      channel.send(embed);

    } catch (error) {

      channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));
  
      return message.reply(

        `Cannot send because there is no Msg set`

   )}}}   
    

  
