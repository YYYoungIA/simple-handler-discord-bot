const Discord = require("discord.js")
const Event = require("../../Structure/Event")

module.exports = new Event("messageCreate", async (bot, message) => {

    if(message.author.bot) return;

    const db = bot.db;

    db.query(`SELECT * FROM serveur WHERE guildID = ${message.guild.id}`, async (err, req) => {

        if(req.length < 1) {

            let sql = `INSERT INTO serveur (guildID, prefix) VALUES (${message.guild.id}, '!')`
            db.query(sql, function(err) {
                if(err) throw err;
            })

            return message.reply("Attendez que le bot enregistre votre serveur !")
        }

        let prefix = req[0].prefix

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);

        let commandFile = bot.alias.get(command.slice(prefix.length))



        if(!message.content.startsWith(prefix)) return;
        if(!commandFile) return message.reply(`Cette commande n'existe pas !`)



        if(commandFile.permission === "Développeur" && message.author.id !== "Your ID here") return message.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")
        if(commandFile.permission !== "Aucune" && commandFile.permission !== "Développeur" && !message.member.permissions.has(new Discord.Permissions(commandFile.permission))) return message.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")

        commandFile.run(bot, message, args, db)
    })
})