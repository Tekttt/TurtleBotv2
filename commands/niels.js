
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {



 let embed = new Discord.RichEmbed()
 .setAuthor("Niiiiiiiiiieeeeeeeeeeeeeeeeeeeelllllllllllllllls")
 .setDescription(`A filthy weeb`)
 .setColor("#f1f442")
 embed.setFooter("Invoked by: " + message.author.tag, message.author.avatarURL)
 embed.setThumbnail("https://i.ytimg.com/vi/cDmMhB0wMIo/maxresdefault.jpg")   
 embed.setImage("https://heels2clogs.files.wordpress.com/2014/12/kinderdijk_clogs-and-windmill.jpg?w=2169")
 message.channel.sendEmbed(embed);

   }