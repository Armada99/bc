const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
     client.user.setActivity("Brawl Craft v1.3.1"); 
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 
 if (msg.content === '!ping')
     msg.reply('pong');
 
if(msg.content==='!code') 
    msg.channel.send("https://link.brawlstars.com/supportcreator/en?code=Mordeus");
 
 });

client.login(process.env.BOT_TOKEN);
