const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
require("dotenv").config();

const { Message, Channel, Reaction, User, GuildMember } = Partials;

const { chargeEvenements } = require('./Handlers/evenementHandler.js');
const { chargeCommandes } = require('./Handlers/commandeHandler.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildModeration,
		GatewayIntentBits.GuildVoiceStates,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMessageTyping,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.DirectMessageTyping,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildScheduledEvents,
		GatewayIntentBits.AutoModerationConfiguration,
		GatewayIntentBits.AutoModerationExecution
	],
	partials: [
		Partials.Message,
		Partials.Channel,
		Partials.Reaction,
		Partials.User,
		Partials.GuildMember
	]
});

client.commands = new Collection();
// Lancement du Bot
client.login(process.env.TOKEN).then(() => {
	chargeEvenements(client);
	chargeCommandes(client);
})