const Discord = require("discord.js");
const Bot = require("../Bot");
const mysql = require("mysql")

/**
 * 
 * @param {Bot} bot 
 * @param {Discord.Message} message 
 * @param {string[] || Discord.CommandInteractionOptionResolver} args 
 * @param {mysql.Connection} db 
 */

function RunFunction(bot, message, args, db) {}

class Command {
    
    /**
     * @typedef {{name: string, alias: string[], permission: bigint, run: RunFunction}} CommandA
     * @param {CommandA} options 
     */
    constructor(options) {
        
        this.name = options.name;
        this.alias = options.alias;
        this.permission = options.permission;
        this.run = options.run;
    }
}

module.exports = Command;