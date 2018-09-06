const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const apikey = process.env.APIKEY;

const fs = require("fs");
const botconfig = require("./botconfig.json");
const token = process.env.BOT_TOKEN;

bot.commands = new Discord.Collection();
 
fs.readdir("./commands/", (err, files) => {
 
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
 
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setStatus('available');
  bot.user.setActivity("Fortnite", {type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
 
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
});
 
bot.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Starter"));
});





bot.login(token);
