const { client } = require('discord.js');

// Connection du bot
module.exports = {
	name: "ready",
	onde: true,
	execute(client) {
		console.log(`${client.user.username} est connecté`)
	}
}