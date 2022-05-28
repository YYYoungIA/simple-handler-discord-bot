const Discord = require("discord.js")
const Event = require("../../Structure/Event");

module.exports = new Event("interactionCreate", async (bot, interaction) => {

    const db = bot.db;

    if(interaction.isCommand()) {

        const command = bot.commands.get(interaction.commandName)
    

        if(command.permission === "Développeur" && interaction.user.id !== "Your ID here") return interaction.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")
        if(command.permission !== "Aucune" && command.permission !== "Développeur" && !interaction.member.permissions.has(new Discord.Permissions(command.permission))) return interaction.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")

        command.run(bot, interaction, interaction.options, bot.db)
    }

    
})