const Bot = require("./structures/Bot");
const bot = new Bot();
const {token} = require("./config");

bot.start(token)
