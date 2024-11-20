const { CommandInteraction } = require('discord.js');

module.exports = {
	name: "interactionCreate",

	// Créer un intéraction si c'est une commande 
	execute(interaction, client)
	{
		if (interaction.isChatInputCommand())
		{
			const command = client.commands.get(interaction.commandName);

			if (!command)
				interaction.reply({ content: "Commandement désuet" });

			command.execute(interaction, client);
		}
		else if (interaction.isAutocomplete())
		{
			const command = client.commands.get(interaction.commandName);

			if (!command)
				interaction.reply({ content: "Commandement désuet" });

			command.autocomplete(interaction, client);
		}
		else
			return;
	},
};
