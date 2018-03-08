const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {
 

    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("This is the users information.")
      .setColor("#f1f442")
      .addField("Username", `${message.author.username}`)
      .addField("ID", `${message.author.id}`)
      embed.setFooter("Invoked by: " + message.author.tag, message.author.avatarURL)
      message.channel.sendEmbed(embed);



  }
