

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

 const sayMessage = args.join(" ");
 // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
 message.delete().catch(O_o=>{}); 
 // And we get the bot to say the thing: 
 message.channel.send(sayMessage);
}
