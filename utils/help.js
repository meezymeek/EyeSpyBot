/*******************************************************************************


Help function


*******************************************************************************/

//required----------------------------------------------------------------------
const Discord = require("discord.js");

function helpFunc(x, y){

  //set variables---------------------------------------------------------------
  let botIcon = y.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()

  //set fields------------------------------------------------------------------
  .setDescription("Test Commands")
  .setColor('#e7dcbf')
  .setThumbnail(botIcon)
  .addField('command: ' , 'method')
  .addField('example field: ' , 'example field')


  return x.channel.send(botembed);
}

module.exports = helpFunc;
