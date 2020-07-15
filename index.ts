import { Client, Message } from 'discord.js';
import * as config from './config.json';
import { reactMessage } from './reacts';

const client = new Client();

client.once('ready', () => {
    console.log('bot is running');
});

client.on('message', (message : Message) : void => {
    if (message.author.bot) return;

    const content: string = message.content;

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

    reactMessage(message);
});

client.login(config.token);
