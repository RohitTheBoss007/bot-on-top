import { Client, Message, PartialMessage } from 'discord.js';
import * as config from './config.json';
import { reactMessage } from './reacts';
import * as snipe from './snipe'

const client = new Client();

type DiscordMessage = Message | PartialMessage

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

    if (content.startsWith('!snipe')) {
        message.channel.send(snipe.getDeleted())
    }

    if (content.startsWith('!esnipe')) {
        message.channel.send(snipe.getEdit())
    }

    reactMessage(message);
});

client.on('messageUpdate', (oldMessage : DiscordMessage, newMessage : DiscordMessage) : void => {
    snipe.recordEdit(oldMessage as Message)
});

client.on('messageDelete', (oldMessage : DiscordMessage) : void => {
    snipe.recordDelete(oldMessage as Message)
})

client.login(config.token);
