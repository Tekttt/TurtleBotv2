const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {



var stalin= []
          fs.readdirSync("./stalin/").forEach(file => {
            stalin.push(file)
            })
          var result = Math.floor((Math.random() * stalin.length));
          message.channel.startTyping()
          message.channel.send({file: `./stalin/${stalin[result]}`});
          message.channel.send("A fine eve")
          
          message.channel.stopTyping()
          console.log(message.author.tag + " Used " + config.prefix + "stalin")
          };