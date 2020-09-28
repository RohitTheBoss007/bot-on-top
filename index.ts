import { Client, Message, PartialMessage } from 'discord.js';
import * as config from './config.json';
import { reactMessage } from './reacts';
import * as snipe from './snipe'

const client = new Client();

type DiscordMessage = Message | PartialMessage;

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
        const embed = snipe.getDeleted();
        if (embed) {
            message.channel.send(embed);
        }
    }

    if (content.startsWith('!esnipe')) {
        const embed = snipe.getEdit();
        if (embed) {
            message.channel.send(embed);
        }
    }

    reactMessage(message);
});

client.on('messageUpdate', (oldMessage : DiscordMessage, newMessage : DiscordMessage) : void => {
    const message : Message = oldMessage as Message;
    if (message.author.bot) return;
    snipe.recordEdit(message);
});

client.on('messageDelete', (oldMessage : DiscordMessage) : void => {
    const message : Message = oldMessage as Message;
    if (message.author.bot) return;
    snipe.recordDelete(message);
})

client.login(config.token);
