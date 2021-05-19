/*******************************************************************************


User Join functions


*******************************************************************************/
//required``````````````````````````````````````````````````````````````````````
id = require('../JSON/id.json');

function userJoin(x, y) {

	x.channels.get(id.MainChannelId).send('**' + y.user.username + '** has joined the star exploration gang', {
		files: ["./images/welcome.png"]
	});
}

module.exports = userJoin;
