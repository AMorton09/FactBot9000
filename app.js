const options = require("./options.json");
const fact = require("./facts/fact.json")
const Discord = require("discord.js");
const bot = new Discord.Client();






bot.on("ready", () => {
    console.log("I am ready!");
});

bot.on("message", (message) => {
    if (message.content.startsWith(options.prefix+"test")) {
        message.channel.send("i Work!");

}

    if (message.content.startsWith(options.prefix+"fact")) {

        message.channel.send(fact.one);
    }
});





bot.login(options.token);