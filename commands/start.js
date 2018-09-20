const Discord = require("discord.js");
// const ms = require("ms");

module.exports.run = async (bot, message, args) => {
if (!message.member.roles.find(r => r.name === "Scrim Staff")) return;
	let scrimlast3chan = message.guild.channels.find(`name`, "scrim-last3");
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: false
	})
	message.delete().catch(O_o=>{});
	scrimlast3chan.send("*Chat will soon be unlocked!*");
	let nficon = bot.user.displayAvatarURL;
	let negicon = message.author.displayAvatarURL;
	let todaysDate = new Date();
	let infoScrimEmbed = new Discord.RichEmbed()
	.setTitle("Small Scrims Community Scrim Info", nficon)
	.addField("Hosted by:", message.author)
	.addField("Loading Content", "Load content by pressing `Ready` wait for Loading Content to be at 100%, then press cancel.")
	.addField("Rules:", "**Using C4, Clingers and Third Partying in top 10 are now allowed**!, please obey the rules while scrimming. Also please report players with !report, and do not publicly announce it.")
	.setFooter(`Match lead by ${message.author.username}`, negicon)
	.setTimestamp()
	.setColor(4702463);
	
	scrimlast3chan.send(infoScrimEmbed);
// 	let pos = message.guild.roles.size - 5;
// 	await message.guild.createRole({name: "CantType", position: pos, color: "#ff0000" });
// 	let canttyperole = message.guild.roles.find(r => r.name === "CantType");
	
// 	let channel1 = message.guild.channels.find(c => c.name === "scrim-last3");
// 			  	await channel1.overwritePermissions(canttyperole.id, {
// 					SEND_MESSAGES: false


// 		  	});

	


	
	const startTimeout = ms => new Promise(res => setTimeout(res, ms))
	
	await startTimeout(5000);
	
	scrimlast3chan.overwritePermissions(message.guild.id, {
	SEND_MESSAGES: true
	})
	let starting = new Discord.RichEmbed()
	.setTitle("Waiting for server IDs...")
	.setFooter("Next snipe at")
	.setTimestamp(new Date(Date.now() + 30000))
	.addField("Please enter the last 3 digits of your server!", "When in-game you can find this in the top left corner of your screen.")
	.setColor(6812512);
	scrimlast3chan.send(starting);
// 		let nextgameEmbed = new Discord.RichEmbed()
//  	.setTitle("**Next snipe in approx...**")
//  	.setDescription("*25 Minutes*")
//  	.setColor(13859315);
// 	(async () => {
// 		const endTime = Date.now() + 1000 * 60 * 25;

// 	const sentMessage = await scrimlast3chan.send(nextgameEmbed);

// 	while( (now = Date.now()) < endTime ) {
// 		let minsRemaining = (endTime - now) / (1000 * 60);
// 		minsRemaining = Math.floor(minsRemaining);
// 		nextgameEmbed.setDescription(`*${minsRemaining} Minutes.*`)
// 		sentMessage.edit(nextgameEmbed);
// 		await startTimeout(1000 * 60);
// 	}
	
// 	})()
	
// 	async()
	
	let gameinfo = new Discord.RichEmbed()
	.setTitle("Game Information")
	.setColor(6378143)
	.setDescription("Loading...");
	scrimlast3chan.send(gameinfo);
	
// 	await startTimeout(60000);
// 	scrimlast3chan.overwritePermissions(message.guild.id, {
// 		SEND_MESSAGES: false
// 	});
	
// 	scrimlast3chan.send("Chat is now **LOCKED**...");
// 	message.guild.roles.find(role => role.name === "CantType").delete("yeetg");

// 	let startEmbed = new Discord.RichEmbed()
// 	.setTitle("**Waiting for server IDs...**")
// 	.setDescription("You have 61 seconds to type your Last3!")
// 	.addField("Please enter the last 3 digits of your server!", "When in-game you can find this in the top left corner of your screen.")
// 	.setColor(6812512);
// 	const end3Time = Date.now() + 1000 * 61;
// 	const sent3Message = await scrimlast3chan.send(startEmbed);
// 	let now3;
// 	while( (now3 = Date.now()) < end3Time ) {
// 		let minsRemaining = (end3Time - now3) / (1000);
// 		minsRemaining = Math.floor(minsRemaining);
// 		startEmbed.setDescription(`You have *${minsRemaining}* seconds to type your Last3!`)
// 		sent3Message.edit(startEmbed);
// 		await startTimeout(5000);
		
// 	}
// 	scrimlast3chan.overwritePermissions(message.guild.id, {
// 		SEND_MESSAGES: true
// 	})
// 	const allCodeRoles = message.guild.roles
// 		.filter(r => (/^\w{3}$/).test(r.name))
// 		.sort((roleA, roleB) => roleA.name.localeCompare(roleB.name))
// 		.array();
// 		const SPLIT_LENGTH = 25;
// 		const splitCodeRoles = [];
// 		for(let i = 0; i < allCodeRoles.length; i += SPLIT_LENGTH){
// 			splitCodeRoles.push(allCodeRoles.slice(i, i + SPLIT_LENGTH));
// 		}
// 		for(const codeRoles of splitCodeRoles) {
// 			let eb = new Discord.RichEmbed().setColor(16776960).setTitle("Game Information").setFooter(`[Live] With ${allCodeRoles.length} matches.`);
// 			for(const role of codeRoles) {
// 				const membersString = role.members.map(m => m.user.tag).join("\n");
// 				eb.addField(`ID: ${role.name}`, membersString, true);
// 			}
// 			let last3chan = message.guild.channels.find(`name`, "scrim-last3");
			
			
// 			last3chan.send(eb);
// 			scrimlast3chan.send("*Chat is now **LOCKED**...*");
// 			scrimlast3chan.overwritePermissions(message.guild.id, {
// 			SEND_MESSAGES: false
// 			})
	
					
			
		//}

	

		
		

		
	

	
// 	let nextgameEmbed = new Discord.RichEmbed()
// 	.setTitle("**Next snipe in approx...**")
// 	.setDescription("*25 Minutes*")
// 	.setColor(13859315);
// 	let last3chan = message.guild.channels.find(`name`, "scrim-last3");
// 		scrimlast3chan.overwritePermissions(message.guild.id, {
// 		SEND_MESSAGES: false
// 			})

		
		
// 	await startTimeout(3000);
// 		const agree = "👍";
// 	const disagree = "👎";

// 	let testEmbed = new Discord.RichEmbed()
// 	.setTitle("[Poll] Should We Restart?")
// 	.setDescription("Please vote below.")
// 	.setFooter("Note: The host will decide a restart!")
// 	.setColor(16097625);
// 	let msg = await last3chan.send(testEmbed);
// 	await msg.react(agree);
// 	msg.react(disagree);
// 	const endTime = Date.now() + 1000 * 60 * 25;
// 	const sentMessage = await scrimlast3chan.send(nextgameEmbed);
// 	let now;
// 	while( (now = Date.now()) < endTime ) {
// 		let minsRemaining = (endTime - now) / (1000 * 60);
// 		minsRemaining = Math.floor(minsRemaining);
// 		nextgameEmbed.setDescription(`*${minsRemaining} Minutes.*`)
// 		sentMessage.edit(nextgameEmbed);
// 		await startTimeout(1000 * 60);
// 	}
	
	
		
		
		
		

	

}

module.exports.help = {
  name: "start"
}
