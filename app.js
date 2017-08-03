const options = require("./options.json");
const fact = require("./facts/fact.json")
const Discord = require("discord.js");
const bot = new Discord.Client();


//method for grabbing a random property
var randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};


bot.on("ready", () => {
    console.log("I am ready!");
});

bot.on("message", (message) => {
    if (message.content.startsWith(options.prefix+"test")) {
        message.channel.send("i Work!");

}

    if (message.content.startsWith(options.prefix+"fact")) {

        message.channel.send(randomProperty(fact));
    }
});





bot.login(options.token);