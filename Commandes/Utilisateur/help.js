const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports =
{

	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Donne des informations sur les commandes')
		.addStringOption(option => option
			.setName('commande')
			.setDescription('Donne des informations sur la commande entré')
				.setAutocomplete(false)
				.setRequired(false)
			),

	// async autocomplete(interaction) {
	// 	const focusedOption = interaction.options.getFocused(true);
	// 	let choices;

	// 	if (focusedOption.name === 'commande') {
	// 		choices = ['Popular Topics: Threads', 'Sharding: Getting started', 'Library: Voice Connections', 'Interactions: Replying to slash commands', 'Popular Topics: Embed preview'];
	// 	}

	// 	const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
	// 	await interaction.respond(
	// 		filtered.map(choice => ({ name: choice, value: choice })),
	// 	);
	// },



	async execute(interaction, client) 
	{
		// N'exécute pas la commmande si l'utilisateur n'est pas dans ces DM
		if (interaction.channel.type !== 1) 
		{
			interaction.reply({ content: 'Tu ne peux exécuter cette commande qu\'en DM.', ephemeral: true })
			return;
		}

		const embed = new EmbedBuilder()

		// Vérifie si un paramètre est passé ou non
		if (interaction.options.getString('commande') != null)
		{

			// Vérifie si la commande en paramètre existe
			if (client.commands.get(interaction.options.getString('commande')))
			{
				embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
					.setColor("#21ff81")
					.addFields(
						{ name: `\n**${interaction.options.getString('commande').toUpperCase()}**`, value: `Description : **${client.commands.get(interaction.options.getString('commande')).data.description}**` })
			}
			else
			{
				embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
					.setColor("#ff2142")
					.setDescription(`\nLa commande **${interaction.options.getString('commande')}** n'existe pas !`)
			}
		}
		else
		{
			// Si aucun paramètre n'est passé alors cela affiche toute les commandes avec leur description
			embed.setAuthor({
				name: client.user.username,
				iconURL: client.user.displayAvatarURL(),
			})
				.setColor("#21ff81")

			client.commands.forEach(commande => {
				embed.addFields(
					{ name: `\n**${commande.data.name.toUpperCase()}**`, value: `Description : **${commande.data.description}**\n`})
			});

		}

		interaction.reply({ embeds: [embed] });
	}

}