
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

  let newwelcomeMessage = args.join(" ");
  config.welcomeMessage = newwelcomeMessage;
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription(`You have successfully changed the welcome message to ` + config.welcomeMessage )
    .setColor("#f1f442")
    embed.setFooter("Invoked by: " + message.author.tag, message.author.avatarURL)
    embed.setThumbnail("https://i.gyazo.com/00ef66dcc3aa538428bd66eff7895be5.png")       
    message.channel.sendEmbed(embed);
  }