
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

   var pepe = fs.readdirSync("./pepe/")
    var result = Math.floor((Math.random() * pepe.length));
    message.channel.startTyping()
    message.channel.send("A fine eve")
    message.channel.send({file: `./pepe/${pepe[result]}`});
    message.channel.stopTyping()
    console.log(message.author.tag + " Used " + config.prefix + "pepe")

    
    };