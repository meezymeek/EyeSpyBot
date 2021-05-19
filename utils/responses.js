/*******************************************************************************


Response function


*******************************************************************************/

//required ---------------------------------------------------------------------
const Discord = require("discord.js");

const diceRoll = require('./roll');
const helpFunc = require('./help');

//function start----------------------------------------------------------------
//x=messages, y=bot, -----------------------------------------------------------
function responses (x, y){
  //change message to lower case------------------------------------------------
  let msg =x.content.toLowerCase();

  //random chance generator for random message----------------------------------
  const randNum = Math.floor(Math.random() * 100);


  /****************************************************************************/
  /*outside functions---------------------------------------------------------*/

  //Help------------------------------------------------------------------------
  if (msg===(':-help')){helpFunc(x, y)};
  //Dice roll-------------------------------------------------------------------
  if (msg.startsWith(':-roll')){diceRoll(x)};

  //general responses ----------------------------------------------------------
  if (msg===('test')){
    x.channel.send('test!');
  }
  if (msg.includes('random test')){
    if(randNum < 10){
      x.channel.send('random message!');
    }
  }
}
module.exports = responses;
