const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

    let embed = new Discord.RichEmbed()

    .setAuthor(`${message.author}`)
    .setImage("https://i.gyazo.com/00ef66dcc3aa538428bd66eff7895be5.png")
    .setDescription("Testing")
    .addField("Testing")
    .setColor("#000000")
    message.channel.send(embed);
    
}
