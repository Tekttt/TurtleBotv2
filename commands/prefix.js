
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {
// let newPrefix = message.content.split(" ").slice(1, 2)[0];
//// if(!newPrefix === null) return; 
 //config.prefix = newPrefix;
// fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
 
 
 let embed = new Discord.RichEmbed()
     
     .setAuthor(message.author.username)
     .setDescription(`The current prefix is ` + config.prefix)
     .setColor("#f1f442")
     embed.setFooter("Invoked by: " + message.author.tag, message.author.avatarURL)
     embed.setThumbnail("https://i.gyazo.com/00ef66dcc3aa538428bd66eff7895be5.png")                        
   message.channel.send(embed);
 }