const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, SlashCommandBuilder } = require("discord.js");

const listeRole = [
	{
		customId: 'role-loups-garous',
		options: [
			{ label: 'Loup-Garou', value: 'Loup-Garou' },
			{ label: 'Vilain Petit Loup', value: 'Vilain Petit Loup' },
			{ label: 'Infect Père des Loups', value: 'Infect Père des Loups' },
			{ label: 'Loup-Garou Feutré', value: 'Loup-Garou Feutré' },
			{ label: 'Loup-Garou Perfide', value: 'Loup-Garou Perfide' },
			{ label: 'Loup-Garou Mystique', value: 'Loup-Garou Mystique' },
			{ label: 'Loup-Garou Grimeur', value: 'Loup-Garou Grimeur' },
			{ label: 'Loup-Garou Vengeur', value: 'Loup-Garou Vengeur' },
			{ label: 'Loup-Garou Alpha', value: 'Loup-Garou Alpha' },
			{ label: 'Grand méchant loup', value: 'Grand méchant loup' },
			{ label: 'Loup-Garou Craintif', value: 'Loup-Garou Craintif' },
			{ label: 'Loup-Garou Hurleur', value: 'Loup-Garou Hurleur' },
			{ label: 'Loup-Garou Ténébreux', value: 'Loup-Garou Ténébreux' },
			{ label: 'Loup-garou sanguinaire', value: 'Loup-garou sanguinaire' },
			{ label: 'Loup-garou Muselant', value: 'Loup-garou Muselant' }
		]
	},
	{
		customId: 'role-villageois-1',
		options: [
			{ label: 'Voyante', value: 'Voyante' },
			{ label: 'Montreur d\'Ours', value: 'Montreur d\'Ours' },
			{ label: 'Renard', value: 'Renard' },
			{ label: 'Détective', value: 'Détective' },
			{ label: 'Citoyen', value: 'Citoyen' },
			{ label: 'Prêtresse', value: 'Prêtresse' },
			{ label: 'Chaman', value: 'Chaman' },
			{ label: 'Oracle', value: 'Oracle' },
			{ label: 'Jumeaux', value: 'Jumeaux' },
			{ label: 'Analyste', value: 'Analyste' },
			{ label: 'Druide', value: 'Druide' },
			{ label: 'Marchande de Fruits', value: 'Marchande de Fruits' },
			{ label: 'Vieux Sage', value: 'Vieux Sage' },
			{ label: 'Occultiste', value: 'Occultiste' },
			{ label: 'Fossoyeur', value: 'Fossoyeur' },
			{ label: 'Conteuse', value: 'Conteuse' }
		]
	},
	{
		customId: 'role-villageois-2',
		options: [
			{ label: 'Espion', value: 'Espion' },
			{ label: 'Interprète', value: 'Interprète' },
			{ label: 'Aubergiste', value: 'Aubergiste' },
			{ label: 'Croupier', value: 'Croupier' },
			{ label: 'Bibliothécaire', value: 'Bibliothécaire' },
			{ label: 'Villageois', value: 'Villageois' },
			{ label: 'Petite Fille', value: 'Petite Fille' },
			{ label: 'Sorcière', value: 'Sorcière' },
			{ label: 'Salvateur', value: 'Salvateur' },
			{ label: 'Trublion', value: 'Trublion' },
			{ label: 'Sœurs', value: 'Sœurs' },
			{ label: 'Ancien', value: 'Ancien' },
			{ label: 'Corbeau', value: 'Corbeau' },
			{ label: 'Idiot du village', value: 'Idiot du village' },
			{ label: 'Garde', value: 'Garde' },
			{ label: 'Chasseur', value: 'Chasseur' }
		]
	},
	{
		customId: 'role-villageois-3',
		options: [
			{ label: 'Ermite', value: 'Ermite' },
			{ label: 'Serviteur', value: 'Serviteur' },
			{ label: 'Servante dévouée', value: 'Servante dévouée' },
			{ label: 'Lapin', value: 'Lapin' },
			{ label: 'Bienfaiteur', value: 'Bienfaiteur' },
			{ label: 'Illusionniste', value: 'Illusionniste' },
			{ label: 'Mire', value: 'Mire' },
			{ label: 'Braconnier', value: 'Braconnier' },
			{ label: 'Rebouteux', value: 'Rebouteux' },
			{ label: 'Inquisiteur', value: 'Inquisiteur' },
			{ label: 'Témoin', value: 'Témoin' },
			{ label: 'Comédien', value: 'Comédien' },
			{ label: 'Frère Siamois', value: 'Frère Siamois' },
			{ label: 'Trappeur', value: 'Trappeur' }
		]
	},
	{
		customId: 'role-special',
		options: [
			{ label: 'Loup-Garou Blanc', value: 'Loup-Garou Blanc' },
			{ label: 'Assassin', value: 'Assassin' },
			{ label: 'Ange', value: 'Ange' },
			{ label: 'Imitateur', value: 'Imitateur' },
			{ label: 'Rival', value: 'Rival' },
			{ label: 'Joueur de flûte', value: 'Joueur de flûte' },
			{ label: 'Feu follet', value: 'Feu follet' },
			{ label: 'Charmeuse', value: 'Charmeuse' },
			{ label: 'Voyou', value: 'Voyou' },
			{ label: 'Barbare', value: 'Barbare' },
			{ label: 'Nécromancien', value: 'Nécromancien' },
			{ label: 'Succube', value: 'Succube' },
			{ label: 'Tueur en Série', value: 'Tueur en Série' },
			{ label: 'Enfant Sauvage', value: 'Enfant Sauvage' },
			{ label: 'Cupidon', value: 'Cupidon' },
			{ label: 'Voleur', value: 'Voleur' },
			{ label: 'Loup-Garou Amnésique', value: 'Loup-Garou Amnésique' },
			{ label: 'Chien-Loup', value: 'Chien-Loup' },
			{ label: 'Escroc', value: 'Escroc' },
			{ label: 'Romulus ou Remus', value: 'Romulus ou Remus' },
			{ label: 'Auramancien', value: 'Auramancien' },
			{ label: 'Tombeur', value: 'Tombeur' }
		]
	},
];


const avis_role = [
	{ label: 'Pas du tout à la hauteur.'            , value: '1' }, 
	{ label: 'Assez limité, peu intéressant.'       , value: '2' },
	{ label: 'Plutôt satisfaisant, j\'ai bien aimé.', value: '3' }, 
	{ label: 'Parfait, j\'ai adoré ce rôle.'        , value: '4' }
];

const avis_ambiance = [
	{ label: 'L\'ambiance était inexistante.'            , value: '1' }, 
	{ label: 'Un peu fade, pas assez dynamique.'         , value: '2' },
	{ label: 'Bonne ambiance, agréable dans l\'ensemble.', value: '3' }, 
	{ label: 'Ambiance parfaite, très immersive.'        , value: '4' }
];

const avis_equilibrage = [
	{ label: 'Totalement déséquilibré.'        , value: '1' },
	{ label: 'Quelques problèmes d\'équilibre.', value: '2' },
	{ label: 'Globalement bien équilibré.'     , value: '3' },
	{ label: 'Parfaitement équilibré.'         , value: '4' }
];

const avis_duree = [
	{ label: 'Trop longue et fatigante.'    , value: '1' },
	{ label: 'Un peu trop longue.'          , value: '2' },
	{ label: 'Durée correcte.'              , value: '3' },
	{ label: 'Durée parfaite, bien rythmée.', value: '4' }
];

// Liste des utilisateur entrain de faire la commande
let utilisateurActuel = {};




/**
 * Création du menu déroulant 
 * @param {*} customId id pour le menu déroulant
 * @param {*} liste liste à utilisé
 * @returns le menu déroulant créé
 */
async function creationMenu(customId, liste)
{
	if ( customId.startsWith('role') )
		return new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId(customId)
					.setPlaceholder(customId)
					.setDisabled(false)
					.addOptions(liste));
	else
		return new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId(customId)
					.setPlaceholder('Rien n\'a été sélectionné')
					.setDisabled(false)
					.addOptions(liste));
}


/**
 * Création de la liste déroulante
 * @param {*} customId id pour savoir quelle liste utilisé 
 * @param {*} qst la question posé
 * @param {*} descriptionQst la description supplémentaire
 * @returns la liste déroulante
 */
async function listeDeroulante(customId, qst, descriptionQst) 
{

	let components = [];

	if (customId === "menu_role")
	{
		for ( let i = 0; i <= listeRole.length-1; i++)
			components.push(await creationMenu(listeRole[i].customId, listeRole[i].options))
	}
	else
	{
		switch ( customId )
		{
			case 'avis_role' : 
				components.push(await creationMenu(customId, avis_role))
				break;

			case 'avis_ambiance':
				components.push(await creationMenu(customId, avis_ambiance))
				break;

			case 'avis_equilibrage':
				components.push(await creationMenu(customId, avis_equilibrage))
				break;

			case 'avis_duree':
				components.push(await creationMenu(customId, avis_duree))
				break;


			default:
				console.log('Erreur d\'entrer pour le customID')
		}

	}

	const embed = new EmbedBuilder()
		.setTitle(qst)
		.setColor("#21ff81")
		.setDescription(descriptionQst);


	return { embeds: [embed], components: components };

}


/**
 * Lis la réponse à la liste déroulante
 * @param {*} interaction interaction de la liste
 * @param {*} donneeRecolte un tableau contenant la liste des précedente réponse
 * @returns la promise résolu ( utile pour attendre la réponse de l'utilisateur )
 */
async function lectureReponse(interaction, donneeRecolte, customId)
{
	return new Promise((resolve) => {
		
		const filter = i => i.user.id === interaction.user.id && i.isStringSelectMenu() && i.customId === customId || customId === 'menu_role' ;
		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

		collector.on('collect', async (i) => {
				if (i.isStringSelectMenu()) {
				donneeRecolte.push(i.values[0]);
				await i.deferUpdate()
				collector.stop();
}
		});

		collector.on('end', (collected, reason) => {
			if ( reason === 'time')
			{
				resolve(false);
			}

			resolve(true);
		});
	
	});
}


/**
 * Envoie un message d'erreur en DM à l'utilisateur 
 * @param {*} client client qui execute
 * @param {*} description message à envoyer
 * @param {*} iDutilisateur iD de l'utilisateur
 */
async function envoieMessageErreur(client, description, iDutilisateur)
{
	const channelUtilisateur = await client.users.fetch(iDutilisateur)
	const embed = new EmbedBuilder()

	embed.setAuthor({
		name: client.user.username,
		iconURL: client.user.displayAvatarURL(),
	})
		.setColor("#ff2142")
		.setDescription(description)

	channelUtilisateur.send({ embeds: [embed] })
	

	if (utilisateurActuel[iDutilisateur])
		delete utilisateurActuel[iDutilisateur];
}

/**
 * Creer un string avec une note
 * @param {*} avis un entier qui correspond à la note à mettre
 * @returns le nombre d'étoile en fonctyion de l'avis
 */
function satisfaction(avis)
{
	let nbEtoile = ""
	
	for (let i = 1; i <= avis; i++)
		nbEtoile += ":star:"

	return nbEtoile
}




module.exports = 
{

	data: new SlashCommandBuilder()
		.setName('avis')
		.setDescription('Donne ton avis sur la partie'),


	async execute(interaction, client)
	{
		const idUtilisateur = interaction.user.id

		// N'exécute pas la commmande si l'utilisateur n'est pas dans ces DM
		if ( interaction.channel.type !== 1 )
		{
			interaction.reply({content : 'Tu ne peux exécuter cette commande qu\'en DM.', ephemeral: true})
			return;
		}

		// Tableau de données
		let donneeRecolte = []

		// si un utilisateur execute déjà la commande cela bloque le fait de refaire la commande
		if (utilisateurActuel[idUtilisateur])
		{
			envoieMessageErreur(client, 'Tu exécutes déjà la commande.', idUtilisateur)
			return
		}




		utilisateurActuel[idUtilisateur] = true;

		// Role joueur
		const roleMenu = await listeDeroulante('menu_role', 'Quel était ton rôle ?', 'Choisis le rôle que tu as été.');
					await interaction.reply(roleMenu);
				if(!(await lectureReponse(interaction, donneeRecolte, 'menu_role')))
		{
			envoieMessageErreur(client, 'Temps limite pour une réponse atteint.', idUtilisateur)
			return 
		}



		// note sur le role
		const noteRole = await listeDeroulante('avis_role', 'Comment as-tu trouvé ton rôle ?', 'Partage ton ressenti sur ce rôle');
		await interaction.editReply(noteRole)
		if (!(await lectureReponse(interaction, donneeRecolte, 'avis_role')))
		{
			envoieMessageErreur(client, 'Temps limite pour une réponse atteint.', idUtilisateur)
			return 
		}


		// note sur l'équilibrage de la partie
		const duree = await listeDeroulante('avis_duree', 'Comment as-tu trouvé la durée de la partie ?', 'Partage ton ressenti sur la durée de la partie');
		await interaction.editReply(duree)
		if (!(await lectureReponse(interaction, donneeRecolte, 'avis_duree')))
		{
			envoieMessageErreur(client, 'Temps limite pour une réponse atteint.', idUtilisateur)
			return 
		}

		
		// note sur l'équilibrage de la partie
		const equilibrage = await listeDeroulante('avis_equilibrage', 'Comment as-tu trouvé l\'équilibre des camps ?', 'Partage ton ressenti sur l\'équilibrage des camps');
		await interaction.editReply(equilibrage)
		if (!(await lectureReponse(interaction, donneeRecolte, 'avis_equilibrage')))
		{
			envoieMessageErreur(client, 'Temps limite pour une réponse atteint.', idUtilisateur)
			return 
		}
		


		// note sur l'ambiance
		const ambiance = await listeDeroulante('avis_ambiance', 'Comment as-tu trouvé l\'ambiance de la partie ?', 'Partage ton ressenti sur l\'ambiance');
		await interaction.editReply(ambiance)
		if (!(await lectureReponse(interaction, donneeRecolte, 'avis_ambiance')))
		{
			envoieMessageErreur(client, 'Temps limite pour une réponse atteint.', idUtilisateur)
			return
		}

		if ( donneeRecolte.length === 5 )
		{
			const channelUtilisateur = await client.users.fetch(idUtilisateur)
            const channelAvis = await client.channels.cache.get(process.env.AVIS_CHANNEL)
			const embed              = new EmbedBuilder()

			embed.setAuthor({
				name: interaction.user.globalName,
				iconURL: interaction.user.displayAvatarURL(),
			})
				.setColor("#21ff81")
				.setDescription(`**Role joué** \n${donneeRecolte[0]} \n\n`+
				                `**Satisfaction du rôle**     \n${satisfaction(donneeRecolte[1])} -- *${donneeRecolte[1]}/4* \n\n`+
				                `**Durée de la partie**       \n${satisfaction(donneeRecolte[2])} -- *${donneeRecolte[2]}/4* \n\n`+
				                `**Équilibrage de la partie** \n${satisfaction(donneeRecolte[3])} -- *${donneeRecolte[3]}/4* \n\n`+
				                `**Ambiance de la partie**    \n${satisfaction(donneeRecolte[4])} -- *${donneeRecolte[4]}/4* \n\n`)
				.setFooter({ text: "Merci d'avoir partagé ton avis." });


				channelAvis.send({ embeds: [embed] });
				channelUtilisateur.send({ embeds: [embed] });
		}
		else
		{
			envoieMessageErreur(client, 'Une donnée n\'a pas été renseigné', idUtilisateur)
		}

		delete utilisateurActuel[idUtilisateur];
	}

}