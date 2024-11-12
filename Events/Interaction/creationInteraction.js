const { CommandInteraction } = require('discord.js');

module.exports = {
	name: "interactionCreate",

	// Créer un intéraction si c'est une commande 
	execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) {
			interaction.reply({ content: "Commandement désuet" });
		}

		command.execute(interaction, client);
	},
};