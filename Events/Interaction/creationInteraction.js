const { CommandInteraction } = require('discord.js');

module.exports = {
	name: "interactionCreate",

	// Créer un intéraction si c'est une commande 
	execute(interaction, client)
	{
		const command = client.commands.get(interaction.commandName);
		
		if (!command)
		{
			interaction.reply({ content: "Commandement désuet" });
		}

		if (interaction.isChatInputCommand())
		{
			command.execute(interaction, client);
		}
		else if (interaction.isAutocomplete())
		{
			command.autocomplete(interaction, client);
		}
	},
};