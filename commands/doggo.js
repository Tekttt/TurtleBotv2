
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {


var doggo= []
          fs.readdirSync("./doggo/").forEach(file => {
            doggo.push(file)
          })
          var result = Math.floor((Math.random() * doggo.length));
          message.channel.startTyping()
          message.channel.send({file: `./doggo/${doggo[result]}`});
          message.channel.stopTyping()
          console.log(message.author.tag + " Used " + config.prefix + "doggo")
           };