

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

    if (talkedRecently.has(msg.author.id)) {
        msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
} else {

       // the user can type the command ... your command code goes here :)

    // Adds the user to the set so that they can't talk for a minute
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 10000);
}}