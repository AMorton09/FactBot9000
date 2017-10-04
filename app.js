const options = require("./options.json");
const copyPasta = require("./messages/spam.json")
const fact = require("./messages/fact.json")
const Discord = require("discord.js");
const bot = new Discord.Client();


//method for grabbing a random property
let randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};


let purgeMessages = (message) =>{
    let count = 0;
    message.channel.fetchMessages({limit: 100}).then(messages =>{
        let msgArr = messages.array();
        let numMsg = msgArr.length;

        for(let i = 0; i < numMsg; i++) {
            msgArr[i].delete()
                .then(function() {
                    count = count + 1;
                    if(count >= 100) {
                        purgeMessages();
                    }
                })
                .catch(function() {
                    count = count + 1;
                    if(count >= 100) {
                        purgeMessages();
                    }
                })
        }
    })
        .catch(function(err) {
            console.log('SOMETHING WENT HORRIBLY WRONG!!!!!!!');
            console.log(err);
        });
};




bot.on("ready", () => {
    console.log("I am ready!");
});

bot.on("message",  (message) => {
    if (!message.content.startsWith(options.prefix)) return;
    if (message.content.startsWith(options.prefix+"test")) {
        message.channel.send("i Work!");
    }

    //Purge messages for last 14 days
    if (message.content.startsWith(options.prefix+"purgeRecent")){
        message.channel.bulkDelete(100,true);
    }

    //Complete message purge
    if (message.content.startsWith(options.prefix+"purge")){
        purgeMessages(message);
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
    //spam kappa
    if (message.content.startsWith(options.prefix+"kappaSpam123")){
        message.channel.send(copyPasta.kappa);
        message.channel.send(copyPasta.kappa);
        message.channel.send(copyPasta.kappa);
        message.channel.send(copyPasta.kappa);
        message.channel.send(copyPasta.kappa);

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