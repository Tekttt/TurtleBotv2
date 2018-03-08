
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')

exports.run = function(client, message, args) {

let embed = new Discord.RichEmbed()
.setAuthor(`Turtle bot: Current Prefix:  ${config.prefix}`)
.setImage("https://pre00.deviantart.net/0da9/th/pre/i/2015/186/f/8/kawaii_turtle_by_dessineka-d9011eb.png")
.setDescription("Hello, these are a list of commands below:- \n**austin** - slave\n**niels** - weeb\n**memes** - Sends bad memes\n**turtles** - Sends cute turtle pics\n**dox** - Doxxing ENW members\n**pepe** - Sends dank pepes\n**abc** - Dumb crackhead cunt\n**activity** - Allows you to change the current activity of the bot\n**editmsg** - Allows you to edit the welcome message of the bot\n**prefix** - Allows you to change the prefix of the bot on this server\n**purge** - Allows you to clear the chat\n**reload** - {dev} To reload a command")

.setColor("#39ff0c")
message.channel.send(embed);

}