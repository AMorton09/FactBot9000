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
    //FLUSH CHAT
    if (message.content.startsWith(options.prefix+"flush")){
        for ( i=0;i<25;i++ ){
            if (i%5 == 0 ) wait(500);
            message.channel.send("WHIRRRR");

        }
    }
    //RANDOM FFACTS
    if (message.content.startsWith(options.prefix+"fact")) {

        message.channel.send(randomProperty(fact));
    }
    //HARRYPOTTER
    if (message.content.startsWith(options.prefix+"1911")) {

        message.channel.send(copyPasta.arry1);
        message.channel.send(copyPasta.arry2);
        message.channel.send(copyPasta.arry3);
        message.channel.send(copyPasta.arry4);
        message.channel.send(copyPasta.arry5);
    }

    //DONGER RAISER
    if (message.content.startsWith(options.prefix+"donger")){
        message.channel.send(copyPasta.donger)
    }
    //doritos
    if (message.content.startsWith(options.prefix+"doritoz")){
        message.channel.send(copyPasta.doritos)
    }
    //vibe
    if (message.content.startsWith(options.prefix+"vibe")){
        message.channel.send(copyPasta.vibe)
    }
    //virus
    if (message.content.startsWith(options.prefix+"wyrus")){
        message.channel.send(copyPasta.virus)
    }
    //wronghood
    if (message.content.startsWith(options.prefix+"hood")){
        message.channel.send(copyPasta.wrongHood)
    }
    //riot
    if (message.content.startsWith(options.prefix+"riot")){
        message.channel.send(copyPasta.riot);
        message.channel.send(copyPasta.riot);
        message.channel.send(copyPasta.riot);
        message.channel.send(copyPasta.riot);
        message.channel.send(copyPasta.riot);

    }
    //sad panda
    if (message.content.startsWith(options.prefix+"sadPanda")){
        message.channel.send(copyPasta.sadPanda);
        message.channel.send(copyPasta.sadPanda);
        message.channel.send(copyPasta.sadPanda);
        message.channel.send(copyPasta.sadPanda);
        message.channel.send(copyPasta.sadPanda);
    }

});





bot.login(options.token);