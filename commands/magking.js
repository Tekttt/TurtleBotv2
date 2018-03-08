const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {


var magking= []
fs.readdirSync("./magking/").forEach(file => {
  magking.push(file)
  })
var result = Math.floor((Math.random() * magking.length));
message.channel.startTyping()
message.channel.send({file: `./magking/${magking[result]}`});
message.channel.send("A fine eve")

message.channel.stopTyping()
console.log(message.author.tag + " Used " + config.prefix + "magking")
};