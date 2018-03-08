const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {


var abc= []
    fs.readdirSync("./abc/").forEach(file => {
       abc.push(file)
      })
    var result = Math.floor((Math.random() * abc.length));
    message.channel.startTyping()
    message.channel.send({file: `./abc/${abc[result]}`});
    message.channel.send("A fine eve")
    
    message.channel.stopTyping()
    console.log(message.author.tag + " Used " + config.prefix + "abc")
    };