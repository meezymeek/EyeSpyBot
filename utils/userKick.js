/*******************************************************************************


User Kick functions


*******************************************************************************/
//required----------------------------------------------------------------------
id = require('../JSON/id.json');

function userLeave(x, y) {

  x.channels.get(id.MainChannelId).send('**' + y.user.username + "** has died... jk, he just left");
}

module.exports = userLeave;
