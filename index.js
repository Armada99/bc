const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("Brawl Craft v1.1.4"); 
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
    console.log(`${msg.channel.name} : ${msg.author} - ${msg.content}`);
 if (msg.content === '!ping')
     msg.reply('pong');
 /*if(msg.content.startsWith('!blob')) {
    msg.channel.send('<a:blob:723014183645478912>');
    msg.delete();
 }
 if(msg.content.startsWith('!pepe1')) {
    msg.channel.send('<a:pepe_lightsaber:704821408622182470>');
    msg.delete();
 }*/
 
 //if(msg.content.startsWith('!repeat'))
    //for (var i=1;i<=100;i=i+1)
    //msg.channel.send(msg.content.substring(8));

if(msg.content==='!code') 
    msg.channel.send("https://link.brawlstars.com/supportcreator/en?code=Mordeus");

if(msg.content==='!check' && msg.author.equals(280745369707610114)) 
    msg.channel.send("https://link.brawlstars.com/supportcreator/en?code=Mordeus");
 
 });

client.login('NzIyNjg0NDcyNjIwODc1ODU3.XupCig.1J98kBPj60F3aELp3e9Fh9Tq8Ps');