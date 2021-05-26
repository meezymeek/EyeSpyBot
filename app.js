var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();

//all the required shit---------------------------------------------------------
const Discord = require("discord.js");
const bot = new Discord.Client();

//responses --------------------------------------------------------------------
const responses = require('./utils/responses');

// user functions---------------------------------------------------------------
const userJoin = require('./utils/userJoin');
const userLeave = require('./utils/userKick');

// When the bot boots up -------------------------------------------------------
bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);

	//set game -------------------------------------------------------------------
	bot.user.setActivity("Parsing Server");

  //bootup message--------------------------------------------------------------
  const stayAlive = function stayAlive(){//define function
    bot.channels.get(id.dumpChannelId).send("knock knock");
  };
	stayAlive();//execute function
	setInterval(stayAlive ,1800000);//every half an hour execute again

});

//on user add/remove------------------------------------------------------------
bot.on('guildMemberAdd', member  => {
	userJoin(bot, member);
});
bot.on('guildMemberRemove', member => {
	userLeave(bot, member);
});

//message functions-------------------------------------------------------------
bot.on("message", async message => {
	//if autor is a bot, ignore
	if(message.author.bot) return;
	//if message is DM, ignore
	if(message.channel.type === "dm") return;

/******************************************************************************/
	//for testing only------------------------------------------------------------
	//if(message.guild.id == '[GUILD_ID]') return;
/******************************************************************************/

//responses and messages -------------------------------------------------------
		responses(message, bot);
});

const botToken = require('./bottoken.json');
bot.login(botToken.token);
