const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {


 var turtles= []
 fs.readdirSync("./turtles/").forEach(file => {
 turtles.push(file)
 })
 var result = Math.floor((Math.random() * turtles.length));
 message.channel.startTyping()
 message.channel.send({file: `./turtles/${turtles[result]}`});
 message.channel.stopTyping()
 console.log(message.author.tag + " Used " + config.prefix + "turtles")
 };