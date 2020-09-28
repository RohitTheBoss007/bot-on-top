import { Message } from 'discord.js';

export const reactMessage = (message: Message) : void => {
    const content: string = message.content.toLowerCase();

    if (content.search('catthink') !== -1) {
        message.react('701386574251950141');
    }

    if (content.search('geniosity') !== -1) {
        message.react('694148096195821608');
    }

    if (content.search('orz') !== -1) {
        message.react('692402194053333000');
    }
}