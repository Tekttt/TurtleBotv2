const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

module.exports = message => {

    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;
    const client = message.client;
    //let messageArray = message.content.split(" ");
    //let command = messageArray[0];
    //let args = messageArray.slice(1);
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
try {

    let cmdFile = require(`../commands/${command}`)
    cmdFile.run(client, message, args)

}catch (err) {

console.log(`Command ${command} failed\n${err.stack}`);
}



    
}