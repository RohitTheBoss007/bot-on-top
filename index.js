const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('bot is running');
});

client.on('message', message => {
    if (message.author.bot) return;
    const content = message.content;
    if (content === 'ping') {
        message.channel.send('pong');
    } else if (content === 'pong') {
        message.channel.send('ping');
    }

    if (content.startsWith('!lgm')) {
        if (content.length <= 5) {
            message.channel.send('smh');
        } else {
            const person = content.substring(content.search(' ') + 1).trim();
            message.channel.send(`yes ${person} orz`);
        }
    }

    if (content.toLowerCase().search('catthink') !== -1) {
        message.channel.send('<:catthink:701386574251950141>');
    }
});

client.login(config.token);
