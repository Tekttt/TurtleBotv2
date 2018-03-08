
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

var Austin = fs.readdirSync("./Austin/")
var result = Math.floor((Math.random() * Austin.length));
console.log(message.author.tag + " Used " + config.prefix + "Austin")
let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is a dirty slave [.](https://a.wattpad.com/cover/126405198-352-k625601.jpg)")
    .setColor("#f1f442")
    .attachFile( `./Austin/${Austin[result]}`)
    embed.setFooter("Invoked by: " + message.author.tag, message.author.avatarURL)
    message.channel.sendEmbed(embed);
}