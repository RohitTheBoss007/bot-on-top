const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot is running');
});

client.on('message', message => {
    if (message.author.bot) return;
    if (message.content === 'ping') {
        message.channel.send('pong');
    } else if (message.content == 'pong') {
        message.channel.send('ping');
    }
});

client.login(config.token);