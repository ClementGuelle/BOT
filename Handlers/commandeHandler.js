function chargeCommandes(client) {
	const ascii = require('ascii-table');
	const fs = require('fs');
	const table = new ascii().setHeading("Commandes", "Status");

	let commandsArray = [];

	const commandsFolder = fs.readdirSync('./Commandes');
	for (const folder of commandsFolder) {
		const commandFiles = fs.readdirSync(`./Commandes/${folder}`).filter((file) => file.endsWith('.js'));

		for (const file of commandFiles) {
			const commandFile = require(`../Commandes/${folder}/${file}`);

			client.commands.set(commandFile.data.name, commandFile);

			commandsArray.push(commandFile.data.toJSON());

			table.addRow(file, "chargé");
			continue;
		}
	}

	client.application.commands.set(commandsArray);

	return console.log(table.toString(), "\nCommandes chargées");
}

module.exports = { chargeCommandes };