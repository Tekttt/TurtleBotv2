const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const embed = new Discord.RichEmbed()
const ddiff = require('return-deep-diff')
const talkedRecently = new Set();
require('./utility/eventloader')(client);

var reload = (message, cmd) => {

    delete require.cache[require.resolve('./commands/' + cmd)];
    try {
     let cmdFile = require('./commands/' + cmd);
    } catch (err) {
    message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log (error.stack));
    }
    message.channel.sendMessage (`${cmd} reload was successful!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));

    };
    exports.reload = reload;



//Guild events

  client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) {
  return 
  }
  channel.send(`Hello friends`);

  });

  client.on("guildMemberAdd", (member) => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) {
  return 
  }
  channel.send(config.welcomeMessage +  `${member}`);
  console.log (channel);
  });

  client.on("guildMemberRemove", (member) => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel){
    return
  }
  channel.send(`${member.user.username} Has left the server, have a fine eve.`);

  });

  client.on('guildCreate', guild => { 
  const channel = member.guild.channels.find('name', 'general');
  if (!channel){
    return
  }
  channel.send(`Hello ${guild.name} A fine morn`);
  
  });

 // client.on ('guildMemberUpdate', (oMember, nMember) => {
 //   console.log(ddiff(oMember, nMember));





  

//channel create
  client.on('channelCreate', async channel  =>  {
  console.log(`A ${channel.type} Channel called ${channel.name} and was ${channel.createdAt} with the ID of ${channel.id}`);
  const logs = channel.guild.channels.find("name", "logs");
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channel_creator = audit.entries.first().executor;

  let embed = new Discord.RichEmbed()
  .setAuthor(`A channel was created.`)
  .setColor("#a50000")
  .addField(`A ${channel.type} channel called ${channel.name} was created by ${channel_creator.tag}`,`Channel ID = ${channel.id}`)
  embed.setFooter(`Invoked by:   ${channel_creator.tag}`)
  embed.setThumbnail("https://i.gyazo.com/00ef66dcc3aa538428bd66eff7895be5.png")
  logs.send(embed);
  });


//channel delete

  client.on('channelDelete', async (channel) => {

  console.log(` A ${channel.type} Channel called ${channel.name} was deleted`);
  const logs = channel.guild.channels.find("name", "logs");
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channel_remover = audit.entries.first().executor;
  let embed = new Discord.RichEmbed()
  .setAuthor(`A channel was deleted`)
  .setColor("#4b0056")
  .addField(`A ${channel.type} channel called ${channel.name} was deleted by ${channel_remover.tag}`,`Channel ID = ${channel.id}`)
  embed.setFooter(`Invoked by: ${channel_remover.tag}`)
  embed.setThumbnail("https://i.gyazo.com/00ef66dcc3aa538428bd66eff7895be5.png")
  logs.sendEmbed(embed);
  });
  
  client.on("message", async (message) => {
    // Exit and stop if the prefix is not there or if user is a bot
  if (message.author.bot) return;

    const swearWords = ["nigger","coon","nig","Black cunt","NIGGER","COON","BLACK CUNT","black cunt","dirty slave","DIRTY SLAVE"];
    if( swearWords.some(word => message.content.includes(word)) ) {
     message.delete(swearWords)
    message.reply("You naughty boy!");
     //Or just do message.delete();
      
    }
  })









  
  
      



client.login(config.token);

//** Split commands into sep files to stop that fucking cunting -help message **/
//** Sendmsg to log channel when someone joins a voice channel **// {DONE}

//**<Log all  3 in the log channel>**// ./
//** Add .ban **// 
//** Add .mute **//
//** Add .kick **//
//** add .unban **/

//** Create abc, magnum, turtle boy, stalin, dox ** {DONE}
//** *Would like to research into webhooks for enw (possibly with google docs?)* **//
//**  ^Possibly webhooks for important news use (https://ifttt.com/maker_webhooks) **//
//** pub database for people to add pics too for the bot to rand.gen? **/

