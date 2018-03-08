
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {


 var dox= []
 fs.readdirSync("./dox/").forEach(file => {
    dox.push(file)
   })
 var result = Math.floor((Math.random() * dox.length));
 message.channel.startTyping()
 message.channel.send({file: `./dox/${dox[result]}`});
 message.channel.send("A fine eve")
 
 message.channel.stopTyping()
 console.log(message.author.tag + " Used " + config.prefix + "dox")
 };