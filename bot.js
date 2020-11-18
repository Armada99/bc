const Discord = require('discord.js');
const client = new Discord.Client();
var x="Brawl Craft v1.3.1";
var lucy=[':blushpensiveconcern:758417447686111304',':pikawot:758417641424683039',':1NitaSmug:637277895177404445',':2PennySmug:732116528337649736',':4MortisSmug:722880939864228000',`:lucywantstodie:758411169047511081`];
var k=false;
var owner=null;
var spams = ['https://media.tenor.co/videos/531b01cb9c116f86794f8c1688cad190/mp4','https://media.tenor.co/videos/b8f2911deb1545641621b530e45df7b1/mp4','https://media.tenor.co/videos/c5008f627762851cf476fbd5d0f7452a/mp4','https://media.tenor.co/videos/531b01cb9c116f86794f8c1688cad190/mp4','https://media.tenor.co/videos/7099b7033d5907f51143d69d9d88d8b6/mp4','https://media.tenor.co/videos/3c63230cdb9f2ecdc8018fdc660719fb/mp4','https://tenor.com/view/ded-chat-gif-18697462','https://tenor.com/view/dead-chat-dead-discord-death-gif-18239566','https://tenor.com/view/boop-dead-chat-gif-13047480','https://tenor.com/view/chats-dead-dead-chat-gif-15061736'];

client.on('ready', () => {
    client.user.setActivity(x); 
    console.log(`Logged in as ${client.user.tag}!`);
    client.users.fetch(`280745369707610114`).then(o=>{owner=o;});
 });

client.on('message', msg => {

if(msg.author.bot) return;
if(msg.guild === null){ var dmbed = new Discord.MessageEmbed()
	.setColor('#32ffff')
	.setAuthor(`${msg.author.username} (${msg.author.id})`,`${msg.author.avatarURL()}`)
	.setDescription(`${msg.content}`)
	.setTimestamp()
	.setFooter(`${client.user.username}`,`${client.user.avatarURL()}`);
    owner.send(dmbed);
    return;         
}
if(msg.content==='!code'){
    msg.channel.send("https://link.brawlstars.com/supportcreator/en?code=Mordeus");
}

if(msg.content.startsWith('!purge')&&msg.author.id==='280745369707610114'){

    const args = msg.content.split(' ').slice(1);
    const amount = args.join(' ');

    if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); 
    if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!');

    if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!');
    if (amount < 1) return msg.reply('You have to delete at least 1 message!');

    msg.channel.messages.fetch({ limit: amount }).then(messages => { 
    msg.channel.bulkDelete(messages)});
    return;
}

if(!(msg.guild.id==='515192821054177285')) return;

if(msg.member.roles.cache.has('660004539709259808') && Math.floor(Math.random()*10)%3===1){
    //lucy
    if(msg.author.id=='394964599801380865') msg.react(lucy[Math.floor(Math.random()*lucy.length)]);
    //milk
    if(msg.author.id=='611569052866969633') msg.react(':milk:754432340994031616');
    //slyfox aka eggy bo
    if(msg.author.id=='561726475070341161') msg.react(':GWcorbinMonkaGIGA:751537035340283937');
    //cookie
    if(msg.author.id=='333414505750986753') msg.react(':Cookie:743975687182090341');
    //3th4n
    if(msg.author.id=='698736166777782362') msg.react('a:3th:754440033137721384');
    //ash
    if(msg.author.id=='674268954910523398') msg.react('a:emoji_1:753881559660101652');
    //fish
    if(msg.author.id=='456894920381431819') msg.react('a:fish:758015640232656907');
    //no i wont
    if(msg.author.id=='708355911369883780') msg.react('a:rainbowblob:766186382967701505');
    //gradont
    if(msg.author.id=='245167348535787530') msg.react(':gradient:758786722187837450');
    //ArtFromCookieLand
    if(msg.author.id=='578996242244173844') msg.react(':cute_pancake:766224617395191838');
    //SpeedyBoost
    if(msg.author.id=='564445298999689218') msg.react('a:Steve:766663449903104010');
}

if(msg.content==='!e'&&msg.author.id==='280745369707610114'){
    k=!k;
    msg.author.send("reaction changed to "+k);
    msg.delete();
    return;
}
if(msg.author.id==='280745369707610114'&& k) msg.react(':TickDoge:749686427754823800');

if (msg.content === '!ping'){
    msg.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - msg.createdTimestamp;
        
        m.edit(`:ping_pong: Pong!\nServer Ping : ${ping}ms\nAPI Ping : ${client.ws.ping}ms`); 
    }); return;
}

    
if(msg.content.startsWith('!blob')&&msg.member.hasPermission('ADMINISTRATOR')) {
    msg.channel.send('<a:blob:723014183645478912>');
    msg.delete();
}

if(msg.content.startsWith('!repeat')&&msg.member.hasPermission("ADMINISTRATOR")){
    msg.delete();
    for (var i=1;i<=15000;i=i+1)
    msg.channel.send(msg.content.substring(8));
}
	

if(msg.content.startsWith('!count')&&msg.member.hasPermission("ADMINISTRATOR")){
    msg.delete();
    for (var i=291474;i<=350000;i=i+1)
    msg.channel.send(i);
}

if(msg.content.startsWith('!status')){
    console.log(`${msg.channel.name} : ${msg.author.username} - ${msg.content}`);
     if(!msg.member.hasPermission('ADMINISTRATOR')){
         msg.reply("No Perms Bro");
         return;
     }
    x = msg.content.substring(8);
    msg.channel.send("changed status to "+x);
    client.user.setActivity(x);
}

if(msg.content.startsWith('!react')){
    msg.member.lastMessage.react("a:blob:723014183645478912");
}

if(msg.content.startsWith('!spam')&&msg.author.id==='280745369707610114'){
    msg.delete();
    for (let i = 0;i<1000;i++)
    msg.mentions.members.first().send(msg.content.substring(6));
    console.log('Finshed spamming '+msg.mentions.members.first().username+' with '+msg.content.substring(6));
}

if(msg.content.startsWith('!joinpos')){
    var pos=0;
    if(msg.content==='!joinpos')
        pos=JoinPos(msg.guild.members.cache,msg.author.id);
        else if(msg.author.id==='280745369707610114')
        pos=JoinPos(msg.guild.members.cache,msg.mentions.members.first().id);
        
    msg.channel.send("Your Join Position is = "+pos);
}
function JoinPos(arr1,ID){
  
    arr1.sort((a, b) => a.joinedAt - b.joinedAt);
    const arr = arr1.keyArray();
    var pos=arr.indexOf(ID) + 1;
    return pos;
}
	
if(msg.content.startsWith(';ban')&&(msg.member.hasPermission('BAN_MEMBERS')||msg.author.id=='394964599801380865')){
    if(msg.mentions.users.first()==undefined) return;
    let em = new Discord.MessageEmbed()
        .setDescription(`<:Check:722874534210043934> ** ${msg.mentions.users.first().username}#${msg.mentions.users.first().discriminator} was banned** | ${msg.content.split(" ").slice(2).join(" ")}`)
        .setColor('GREEN'); 
    msg.channel.send(em);
}

if(spams.includes(msg.content)){
   msg.reply(`maybe`);
    msg.delete(); 
	var dmbed = new Discord.MessageEmbed()
	.setColor('#32ffff')
	.setAuthor(`${msg.author.username} (${msg.author.id})`,`${msg.author.avatarURL()}`)
	.setDescription(`${msg.content}`)
	.setTimestamp()
	.setFooter(`${client.user.username}`,`${client.user.avatarURL()}`);
    owner.send(dmbed);
    return;
}
	
if(msg.content==='!restart'&& msg.author.id==owner.id){
    msg.channel.send('Restarted.').then(() => {
  process.exit(1);
    })
}
});

client.login(process.env.BOT_TOKEN);
