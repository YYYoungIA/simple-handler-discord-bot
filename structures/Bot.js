const Discord = require("discord.js");
const { readdirSync } = require("fs");
const intents = new Discord.Intents(32767);
const Event = require("./handlers/Events");
const Command = require("./handlers/Commands");
const Database = require("./data/Database");

class Bot extends Discord.Client {
    constructor(options) {
        super({intents});

        /**
         * @type {Discord.Collection<string, Command>}
        */

        this.commands = new Discord.Collection()
        this.color = "ff0000"
        this.alias = new Discord.Collection()
        this.db = Database;
        this.function = {
            createID: require("../Functions/createID")
        }
    }
    start(token) {
        readdirSync("./Commands/").forEach(async folder => {
            readdirSync(`./Commands/${folder}/`).filter(file => file.endsWith(".js")).forEach(async cmd => {


                /**
                 * @type {Command}
                */

                let props = require(`../Commands/${folder}/${cmd}`);
                console.log(`${props.length} commandes chargées !`);
                this.commands.set(props.name, props);
            })
        })

        readdirSync("./Events/").forEach(async dirs => {
            readdirSync(`./Events/${dirs}/`).filter(files => files.endsWith(".js")).forEach(async evt => {


                /**
                 * @type {Event}
                */

                const event = require(`../Events/${dirs}/${evt}`);
                console.log(`${event.length} évènements chargés avec succès !`);
                this.on(event.event, event.run.bind(null, this));
            })
        })

    }
}

module.exports = Bot;