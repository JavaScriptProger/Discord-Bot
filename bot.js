const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs');

var token = "your mega token ;)";

var messages = [
  "test", "badmessage"
];


client.on('message', (receivedMessage) => {
    for(var i = 0;i < messages.length;i++){
        if(receivedMessage.content.includes(messages[i])) {
            var user = receivedMessage.mentions.users.first();
            receivedMessage.reply("Это фиаско братан...");
            receivedMessage.delete();
        }
    }
})


client.login(token)