/*******************************************************************************


Roll function


*******************************************************************************/

function diceRoll(x){
  //expected input :-roll 1d20+3------------------------------------------------

  //split message and get roll--------------------------------------------------
  let dice =x.content.split(' ');
  let newDice = dice[1]
  let diceValues= newDice.split('d');//split 1 d 20+3

  //store amount of dice to roll------------------------------------------------
  let diceAmount = diceValues[0] ? diceValues[0] : 1
  let diceTypenMod = diceValues[1]//stores 20+3

  //define variables------------------------------------------------------------
  var diceType = 0;
  var diceMod = 0;

  //set dice type to roll and modifier------------------------------------------
  function diceTypeSetter() {
    if (diceTypenMod.includes('+')){
      newDiceTypenMod = diceTypenMod.split('+');//split 20 + 3
      diceType = newDiceTypenMod[0]//stores 20
      diceMod = newDiceTypenMod[1]//stores 3

    } else {
      diceType = diceTypenMod;//if no mod is passed

    }
  }
  diceTypeSetter();

  //generate random number and multiply by diceType-----------------------------
  var diceRoll = 0;
  function diceRoller() {
    for (var i = 0;  i < diceAmount; i++) {

      //roll multiple times if more dice are requested--------------------------
      diceRoll = diceRoll + 1 + Math.floor(Math.random() * diceType);
    }
  }
  diceRoller();

  //add modifier after rolling--------------------------------------------------
  let diceResult = Number(diceRoll) + Number(diceMod)

  //send results----------------------------------------------------------------
  if (diceRoll == 1){
   x.channel.send('you rolled a nat **1**, hope the DM takes pity on you. (your result is ' + diceResult + ')');
 } else if (diceRoll == diceType) {
   x.channel.send('you rolled a nat **' + diceRoll + '**, Critical Hit! (your result is ' + diceResult + ')');
  } else {
   x.channel.send('you rolled **' +  newDice + '** and got **' + diceResult + '**');
  }
}

module.exports = diceRoll;
