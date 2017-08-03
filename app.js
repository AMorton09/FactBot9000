const options = require("./options.json");
const copyPasta = require("./messages/spam.json")
const fact = require("./messages/fact.json")
const Discord = require("discord.js");
const bot = new Discord.Client();


//method for grabbing a random property
var randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}


bot.on("ready", () => {
    console.log("I am ready!");
});

bot.on("message",  (message) => {
    if (!message.content.startsWith(options.prefix)) return;
    if (message.content.startsWith(options.prefix+"test")) {
        message.channel.send("i Work!");

}
    if (message.content.startsWith(options.prefix+"flush")){
        for ( i=0;i<25;i++ ){
            if (i%5 == 0 ) wait(500);
            message.channel.send("WHIRRRR");

        }
    }
    if (message.content.startsWith(options.prefix+"fact")) {

        message.channel.send(randomProperty(fact));
    }

    if (message.content.startsWith(options.prefix+"1911")) {

        message.channel.send(copyPasta.spam);
    }


});





bot.login(options.token);