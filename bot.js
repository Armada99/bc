const Discord = require('discord.js');
const client = new Discord.Client();
var x="Brawl Craft v1.4.1";
var lucy=[':blushpensiveconcern:758417447686111304',':pikawot:758417641424683039',':1NitaSmug:637277895177404445',':2PennySmug:732116528337649736',':4MortisSmug:722880939864228000',`:lucywantstodie:758411169047511081`];
var milk=[':blushhi:793280365996802098','a:SOcleanchat:793246642736332800'];
var ignitis =['a:kirby:791874217972989984','a:ham:793947164417327165',`a:hyperkirby:799266602825941012`];
var pedro=[`a:chika:796381634026799104`,`a:swag:793404973496270888`];
var weasel=[`a:AS02bounce:796434871827431436`,`:2DAquaCry:796436893596254249`];
var neo=[`:neo_pin:797889138803736638`,`:ticksip:797889204985790536`,`:Golden_Tick_Thanks:803650709362573354`];
var bread=[`a:BlobParty:800426149128699914`];
var lucx=[`a:dragon_wiggle:803529369355812865`];
var amazingsuper=[`:ReactHappy:801897629436870708`];
var stb = [`a:Bunnymine:809668730887864340`];
var spams = ['https://media.tenor.co/videos/531b01cb9c116f86794f8c1688cad190/mp4','https://media.tenor.co/videos/b8f2911deb1545641621b530e45df7b1/mp4','https://media.tenor.co/videos/c5008f627762851cf476fbd5d0f7452a/mp4','https://media.tenor.co/videos/531b01cb9c116f86794f8c1688cad190/mp4','https://media.tenor.co/videos/7099b7033d5907f51143d69d9d88d8b6/mp4','https://media.tenor.co/videos/3c63230cdb9f2ecdc8018fdc660719fb/mp4','https://tenor.com/view/ded-chat-gif-18697462','https://tenor.com/view/dead-chat-dead-discord-death-gif-18239566','https://tenor.com/view/boop-dead-chat-gif-13047480','https://tenor.com/view/chats-dead-dead-chat-gif-15061736'];

var k=false;
var owner=null;
var dmc=null;
var subc1=null;
var subc2=null;
var sublc1=null;
var sublc2=null;  
var sno1=1;
var sno2=1;
var substatus1=false;
var substatus2=false;
var noattach= new Discord.MessageEmbed().setColor(`RED`).setAuthor(`No Attachment Found`).setDescription(`please submit an image of your map along with the map name and link.\n\n**Example:** !submit <map-name> <link> <image>`);
var subnotopen= new Discord.MessageEmbed().setColor(`RED`).setAuthor(`Submissions are not open yet`).setFooter(`If you feel like this is wrong, please report to a staff.`);
var weekdesc= `Week 17 Contest`;               //weekly desc
var publdesc= `Public 6 Contest`;              //public desc
client.on('ready', () => {
    client.user.setActivity(x); 
    console.log(`Logged in as ${client.user.tag}!`);
    client.users.fetch(`280745369707610114`).then(o=>{owner=o;});
    client.users.fetch(`280745369707610114`).then(o=>{owner=o;});
    client.channels.fetch(`812494315929731103`).then(c=>{dmc=c;});
    client.channels.fetch(`812101743101870081`).then(c=>{subc1=c;});
    client.channels.fetch(`812813603996303360`).then(c=>{subc2=c;});
    client.channels.fetch(`812101805517045780`).then(c=>{sublc1=c;});  //weekly log
    client.channels.fetch(`812813652368949278`).then(c=>{sublc2=c;});  //public log
 });

client.on('message', msg => {

if(msg.author.bot) return;
if(msg.guild === null){ var dmbed = new Discord.MessageEmbed()
	.setColor('#32ffff')
	.setAuthor(`${msg.author.username} (${msg.author.id})`,`${msg.author.avatarURL()}`)
	.setDescription(`${msg.content}`)
	.setTimestamp()
	.setFooter(`${client.user.username}`,`${client.user.avatarURL()}`);
	var Attachment = (msg.attachments).array();
	if (msg.attachments.size > 0 && attachIsImage(Attachment[0].url)) dmbed.setImage(Attachment[0].url);
    owner.send(dmbed);       
}

if(msg.guild === null && msg.content.startsWith(`!subweek`)) {
    if(substatus1){
        var Attachment = (msg.attachments).array();
        if (msg.attachments.size > 0 && attachIsImage(Attachment[0].url)) {

            var sub = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Submission #${sno1}`)
            .setTimestamp()
            .setFooter(weekdesc,`${client.user.avatarURL()}`)
            .setImage(Attachment[0].url);
            subc1.send(sub);

            var sublog = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(`${msg.author.username} (${msg.author.id})`,`${msg.author.avatarURL()}`)
            .setTitle(`Submission #${sno1++}`)
            .setDescription(`${msg.content.substring(8)}`)
            .setTimestamp()
            .setFooter(weekdesc,`${client.user.avatarURL()}`)
            .setImage(Attachment[0].url)
            sublc1.send(sublog);

            msg.channel.send(`Map submitted successfully to <#${subc1.id}>`,{embed :sub})

            return;         
        } else msg.channel.send(noattach);
    } else msg.channel.send(subnotopen) 
return;
}
	
if(msg.guild === null && msg.content.startsWith(`!subpublic`)) {
    if(substatus2){
        var Attachment = (msg.attachments).array();
        if (msg.attachments.size > 0 && attachIsImage(Attachment[0].url)) {

            var sub = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setTitle(`Submission #${sno2}`)
            .setTimestamp()
            .setFooter(publdesc,`${client.user.avatarURL()}`)
            .setImage(Attachment[0].url);
            subc2.send(sub);

            var sublog = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setAuthor(`${msg.author.username} (${msg.author.id})`,`${msg.author.avatarURL()}`)
            .setTitle(`Submission #${sno2++}`)
            .setDescription(`${msg.content.substring(10)}`)
            .setTimestamp()
            .setFooter(publdesc,`${client.user.avatarURL()}`)
            .setImage(Attachment[0].url)
            sublc2.send(sublog);

            msg.channel.send(`Map submitted successfully to <#${subc2.id}>`,{embed :sub})

            return;         
        } else msg.channel.send(noattach);
    } else msg.channel.send(subnotopen) 
return;
}
	
if(msg.guild===null || !(msg.guild.id==='515192821054177285')) return;

if(msg.content===`!weekly`&& msg.member.hasPermission('ADMINISTRATOR')){
    substatus1=!substatus1;
    msg.reply("Weekly Submission Channel "+ (substatus1?"Opened":"Closed"));
    dmc.send(`${msg.author.username} (${msg.author.id}) used !weekly `+substatus1);
    return;
}
if(msg.content===`!public`&& msg.member.hasPermission('ADMINISTRATOR')){
    substatus2=!substatus2;
    msg.reply("Public Submission Channel "+ (substatus2?"Opened":"Closed"));
    dmc.send(`${msg.author.username} (${msg.author.id}) used !public `+substatus2);
    return;
}
function attachIsImage(url) {
    return (url.indexOf("png", url.length - "png".length) !== -1 || url.indexOf("jpg", url.length - "jpg".length) !== -1 );
}
	
	
	
if(msg.member.roles.cache.has('660004539709259808') && Math.floor(Math.random()*10)%3===1){
    if(msg.author.id=='394964599801380865') msg.react(lucy[Math.floor(Math.random()*lucy.length)]);
    if(msg.author.id=='611569052866969633') msg.react(milk[Math.floor(Math.random()*milk.length)]);
    if(msg.author.id=='339536061577428993') msg.react(ignitis[Math.floor(Math.random()*ignitis.length)]);
    if(msg.author.id=='781201239932141598') msg.react(pedro[Math.floor(Math.random()*pedro.length)]);
    if(msg.author.id=='526151675640283137') msg.react(weasel[Math.floor(Math.random()*weasel.length)]);
    if(msg.author.id=='580729685886107689') msg.react(neo[Math.floor(Math.random()*neo.length)]);
    if(msg.author.id=='783922153178398760') msg.react(bread[Math.floor(Math.random()*bread.length)]);
    if(msg.author.id=='623657319820951552') msg.react(lucx[Math.floor(Math.random()*lucx.length)]);
    if(msg.author.id=='605786935260217344') msg.react(amazingsuper[Math.floor(Math.random()*amazingsuper.length)]);
    if(msg.author.id=='419583794408849420') msg.react(stb[Math.floor(Math.random()*stb.length)]);

    //schnauzer
    if(msg.author.id=='787699586089222226') msg.react('a:PetTheSchnauz:816271627117133875');
    //mars
    if(msg.author.id=='495563296103989263') msg.react('a:PetTheMarS:803682020126490696');
    //slyfox aka eggy bo
    if(msg.author.id=='561726475070341161') msg.react(':GWcorbinMonkaGIGA:751537035340283937');
    //cookie
    if(msg.author.id=='333414505750986753') msg.react(':Cookie:743975687182090341');
    //3th4n
    if(msg.author.id=='698736166777782362') msg.react('a:3th:754440033137721384');
    //ash
    if(msg.author.id=='674268954910523398') msg.react('a:emoji_1:753881559660101652');
    //fish
    if(msg.author.id=='456894920381431819') msg.react('a:marniesmile:796707009679589396');
    //no i wont
    if(msg.author.id=='708355911369883780') msg.react('a:rainbowblob:766186382967701505');
    //gradont
    if(msg.author.id=='245167348535787530') msg.react(':gradient:758786722187837450');
    //ArtFromCookieLand 
    if(msg.author.id=='578996242244173844') msg.react(':cute_pancake:766224617395191838');
    //SpeedyBoost 
    if(msg.author.id=='564445298999689218') msg.react('a:Steve:766663449903104010');
    //royale29 
    if(msg.author.id=='554640721970462732') msg.react(':angryspoike:784437530622951444');
    //moonrise
    if(msg.author.id=='631200062311235604') msg.react('a:fuminoeating:797548137660940329');
}

if(msg.content==='!e'&&msg.author.id==='280745369707610114'){
    k=!k;
    msg.author.send("reaction changed to "+k);
    msg.delete();
    return;
}
if(msg.author.id==='280745369707610114'&& k) msg.react(':angryspoike:784437530622951444');

if (msg.content === '!ping'){
    msg.channel.send("Pinging...").then(m =>{
        var ping = m.createdTimestamp - msg.createdTimestamp;
        
        m.edit(`:ping_pong: Pong!\nServer Ping : ${ping}ms\nAPI Ping : ${client.ws.ping}ms`); 
    }); return;
}

if(msg.content==='!code'){
    msg.channel.send("https://link.brawlstars.com/supportcreator/en?code=Mordeus");
}
    
if(msg.content.startsWith('!blob')&&msg.member.hasPermission('ADMINISTRATOR')) {
    msg.channel.send('<a:blob:723014183645478912>');
    msg.delete();
}

if(msg.content.startsWith('!repeat')&&msg.member.hasPermission("ADMINISTRATOR")){
    msg.delete();
    for (var i=1;i<=30;i=i+1)
    msg.channel.send(msg.content.substring(8));
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
