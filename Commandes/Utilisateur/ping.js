const { SlashCommandBuilder } = require('discord.js');

module.exports = 
{
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Répond avec la latence du bot.'),

	async execute( interaction, client ) 
	{
		await interaction.reply(`latence : ${client.ws.ping} ms`);
	}
}