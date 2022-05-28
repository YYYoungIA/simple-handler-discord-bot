const Discord = require("discord.js");
const Event = require("../../structures/handlers/Events")
const SlashCommand = require("../../structures/data/SlashCommand")

module.exports = new Event("ready", async (bot) => {

    await SlashCommand(bot)

    console.log("Ready !")
    bot.user.setStatus("online"); // Ne pas toucher !
    bot.user.setActivity("Base by Young | https://github.com/YYYoungIA", {type: "PLAYING"}) // Changer le status si vous le voulez !


})