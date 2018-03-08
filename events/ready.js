
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

module.exports = client => {


console.log(`Magbot Logged in`);
client.user.setActivity(config.activity)
}