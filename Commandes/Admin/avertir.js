const { EmbedBuilder, SlashCommandBuilder, discordSort } = require("discord.js");

function getListeRoleUtilisateur(interaction){
    return getMember(interaction).roles.cache
}

function getUtilisateur(interaction){
    return interaction.user
}

function getMember(interaction){
    return interaction.guild.members.cache.get(getUtilisateur(interaction).id)
}

async function getMembers(interaction){
    return await interaction.guild.members.fetch();
}

async function getChanneUtilisateur(client, idUtilisateur){
    return await client.users.fetch(idUtilisateur)
}

async function getUtilisateurSignale(nomUtilisateur, interaction){
    
    const membresServeur           = await getMembers(interaction)
    let   memberUtilisateurSignale = null
    
    membresServeur.forEach(member => {
        if (member.user.username === nomUtilisateur) {
            memberUtilisateurSignale = member
        }
    })

    return memberUtilisateurSignale

}

function creationEmbed(client){

    const embed = new EmbedBuilder()

    return embed.setAuthor({
        name: client.user.username,
        iconURL: client.user.displayAvatarURL(),
    })
        .setColor("#ff2142")
}

module.exports = {

    data: new SlashCommandBuilder()
        .setName('avertir')
        .setDescription('Envoie un message à la personne qui doit être avertie')
        .addStringOption(option => option
            .setName('utilisateur')
            .setDescription('Le nom de l\'utilisateur à avertir')
            .setRequired(true)
        )
        .addStringOption(option => option
            .setName('raison')
            .setDescription('La raison de l\'avertissement')
            .setRequired(true)
        ),


async execute(interaction, client) {

        // N'exécute la commmande que si l'utilisateur à le rôle d'admin sur le serv
        if (interaction.channel.type === 1) {
            interaction.reply({ content: 'Tu ne peux exécuter cette commande en DM.', ephemeral: true })
            return;
        }

        getListeRoleUtilisateur(interaction).forEach(roleUtilisateur => {
            if (roleUtilisateur === process.env.ROLE_ADMIN) {
                interaction.reply({ content: 'Tu n\'as pas la permission de réaliser cette commande.', ephemeral: true })
                return;
            }
        })

        let embed

        const texteRaison           = interaction.options.getString('raison')
        const nomUtilisateurSignale = interaction.options.getString('utilisateur')

        // Si le client n'existe pas
        if (await getUtilisateurSignale(nomUtilisateurSignale, interaction, client) === null ) {
            embed = creationEmbed(client)
                .addFields({name: `Erreur`, value: `L'utilisateur **${nomUtilisateurSignale}** n'est pas dans le serveur !!`})
                .addFields({name: `Raison écrite`, value: `Le raison écrite était : *${texteRaison}*`})
        }
        else {

            const idUtilisateurSignale      = (await getUtilisateurSignale(nomUtilisateurSignale, interaction, client)).user.id
            const channelUtilisateurSignale =  await getChanneUtilisateur(client, idUtilisateurSignale)

            embed = creationEmbed(client)
                .addFields({ name: `Avertissement`, value: `Ceci est un message d'avertissement de la part des administrateurs du serveur LG-UHC pour la raison :\n **${texteRaison}**` })
                .setFooter({ text: "Attention à ton comportement !" })


            try {
                await channelUtilisateurSignale.send({ embeds: [embed] })
            } catch (error) {
                console.error(`Impossible d'envoyer le message à ${nomUtilisateurSignale} en privé sur l'événement "avertir" `)
                embed = creationEmbed(client)
                    .addFields({ name: `Erreur`, value: `L'utilisateur **${nomUtilisateurSignale}** ne reçoit pas les messages du Bot, il l'a bloqué le saligo` })
                    .addFields({ name: `Raison écrite`, value: `Le raison écrite était : *${texteRaison}*` })
            }

        }

        interaction.reply({ embeds: [embed] })

    }

}