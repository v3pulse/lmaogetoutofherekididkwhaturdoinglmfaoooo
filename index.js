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
  let banMSG = message.content.toUpperCase();
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
 	if(message.channel.id === "478949150340153358"){
  	if(message.content === "!start" && message.member.roles.find(r => r.name === "Scrim Staff")){
		
		  return;
	   	
	   }

		
	
  	let scrimChannel3 = message.guild.channels.find(`name`, "last3-pulse");

	  if(message.content && !banMSG.includes(` `) && banMSG.length < 4 && banMSG.length > 2 && !banMSG.includes(`!`) && !banMSG.includes(`.`) && !banMSG.includes(`/`)) {
	  message.delete();
	  }else{
	  message.delete();
  	}
	  let code = message.content.toUpperCase();
	  if(message.content === "!cls" && message.member.roles.find(r => r.name === "Scrim Staff")){
	  	message.channel.bulkDelete(10);
	  }

	
	  let scrimrole = message.guild.roles.find(`name`, code);
	  if(message.member.roles.has(scrimrole)) return message.author.send("You already typed in a game code!");
	  if(code.length != 3) return;
		

	  let nickname = message.member.nickname;
	  if(scrimrole){
	
  	message.member.addRole(message.guild.roles.find("name", code))
	  }
	  if(!scrimrole){
	  	try {
			  scrimrole = await message.guild.createRole({
			  	name: `${code}`,
			  	color: 6812512,
		  		permissions:[]
				
	  		})
			
			
			message.member.addRole(message.guild.roles.find("name", code));
			message.channel.bulkDelete(1);
			 const startTimeout = ms => new Promise(res => setTimeout(res, ms))
			await startTimeout(300);
			const allCodeRoles = message.guild.roles
			
		.filter(r => (/^\w{3}$/).test(r.name))
		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
		.array();
		const SPLIT_LENGTH = 25;
		const splitCodeRoles = [];
		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
		}
		for(const codeRoles of splitCodeRoles) {
			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Game Information").setFooter(`[Live] With ${allCodeRoles.length} matches.`);
			for(const role of codeRoles) {
				const membersString = role.members.map(m => m.user.tag).join("\n");
				eb.addField(`ID: ${role.name}`, membersString, true);
			}
			let last3chan = message.guild.channels.find(`name`, "scrim-last3");

			last3chan.send(eb);
		}
		
		
		

	   	}catch(e){
		  	console.log(e.stack);
	  	}
		


	  	const eOut = ms => new Promise(res => setTimeout(res, ms))
		  await eOut(70000);
		
		

	  	message.guild.roles.find(role => role.name === code).delete("yeet");
		
		
		
		
		}
	  }
 
});
 





bot.login(token);
