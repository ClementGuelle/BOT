const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports =
{

	data: new SlashCommandBuilder()
		.setName('avertir')
		.setDescription('Envoie un message à la personne qui doit être avertie')
		.addStringOption(option => option
			.setName('utilisateur')
			.setDescription('Le nom de l\'utilisateur à avertir')
			//.setAutocomplete(false)
			.setRequired(true)
		),

	// Met les propositions de pseudo
	/*async autocomplete(interaction, client) {
		const focusedOption = interaction.options.getFocused(true);
		let choices = [];

		if (focusedOption.name === 'utilisateur') {

			// TODO faire en sorte d'avoir la liste de toute les personnes sur le serv
			console.log(client)
			console.log("\n\n\n\n")
			console.log(interaction)

			client.commands.forEach(commande => {
				choices.push(commande.data.name);
			});
		}

		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},*/



	async execute(interaction, client) {
		// N'exécute la commmande que si l'utilisateur à le rôle d'admin sur le serv
		// TODO changé et faire en sorte que ce soit que l'admin
		// TODO faire en sorte de pas pouvoir faire la commande en prv
		if (interaction.channel.type !== 1) {
			interaction.reply({ content: 'Tu ne peux exécuter cette commande qu\'en DM.', ephemeral: true })
			return;
		}

		const embed = new EmbedBuilder()

		// Vérifie si un paramètre est passé ou non
		if (interaction.options.getString('commande') != null) {

			// Vérifie si la commande en paramètre existe
			if (client.commands.get(interaction.options.getString('commande'))) {
				embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
					.setColor("#21ff81")
					.addFields(
						{ name: `\n**${interaction.options.getString('commande').toUpperCase()}**`, value: `Description : **${client.commands.get(interaction.options.getString('commande')).data.description}**` })
			}
			else {
				embed.setAuthor({
					name: client.user.username,
					iconURL: client.user.displayAvatarURL(),
				})
					.setColor("#ff2142")
					.setDescription(`\nLa commande **${interaction.options.getString('commande')}** n'existe pas !`)
			}
		}
		else {
			// Si aucun paramètre n'est passé alors cela affiche toute les commandes avec leur description
			embed.setAuthor({
				name: client.user.username,
				iconURL: client.user.displayAvatarURL(),
			})
				.setColor("#21ff81")

			client.commands.forEach(commande => {
				embed.addFields(
					{ name: `\n**${commande.data.name.toUpperCase()}**`, value: `Description : **${commande.data.description}**\n` })
			});

		}

		interaction.reply({ embeds: [embed] });
	}

}