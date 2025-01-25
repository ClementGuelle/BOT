const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "voiceStateUpdate",
    once: false,
    async execute(oldState, newState, client) {


        const embed = new EmbedBuilder()
        const user  = await client.users.fetch(newState.id)

        const nomBot = client.user.username
        const URLBot = client.user.displayAvatarURL()

        try {

            if (oldState.channelId !== process.env.VOCAL_CHANNEL && newState.channelId === process.env.VOCAL_CHANNEL) {
                // Envoie un message en MP à l'utilisateur quand il rejoint
                embed.setAuthor({
                        name: nomBot,
                        iconURL: URLBot,
                    })
                    .setColor("#21ff81")
                    .setDescription(` ${user},\n` + 
                    `Tu as rejoint une partie de Loup-Garou UHC. Je t'invite à respecter scrupuleusement toutes les règles écrites dans le salon dédié à cet effet, sans quoi je crains que tu ne puisses pas participer aux prochaines parties.\n\n` + 

                    `Durant toute la partie, tu devras rester dans le salon "Village" en mode muet avec ton casque. Un maître du village sera présent pour répondre à tes questions.\n\n` + 
                
                    `Tu pourras quitter le vocal à la fin de la partie.`)
                    .setFooter({ text: "Bonne partie ! Amuse-toi bien." });
            }
            else if (oldState.channelId === process.env.VOCAL_CHANNEL && newState.channelId !== process.env.VOCAL_CHANNEL) {
                // Envoie un message en MP à l'utilisateur quand il quitte
                embed.setAuthor({
                        name: nomBot,
                        iconURL: URLBot,
                    })
                    .setColor("#ff2142")
                    .setDescription(` ${user},\n` +
                    `Merci d'avoir participé à cette partie ! J'espère que tu t'es bien amusé.\n\n` + 

                    `Si tu as envie de nous donner ton avis sur cette partie pour nous aider à nous améliorer, n'hésite pas à taper la commande : **"/avis"**\n\n` + 

                    `Si tu as des questions ou si tu veux signaler quelque chose (à propos du jeu, d'un joueur ou d'un rôle), contacte les maires de la ville dans le salon <#${process.env.FAQ_CHANNEL}>.`)
                    .setFooter({ text: "Merci d'avoir participé !" });
            }

            await user.send({ embeds: [embed] });

        } catch (error) {
            console.error(`Impossible d'envoyer le message à ${user} en privé sur l'événement "voixEtatMiseAJour" `)
        }

    },
};
