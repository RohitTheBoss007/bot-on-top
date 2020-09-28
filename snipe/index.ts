import { Message, MessageEmbed as Embed } from 'discord.js';

let deletedMessage: Message | null = null;
let oldEdit: Message | null = null;

const recordDelete = (oldMessage: Message) : void => {
    deletedMessage = oldMessage;
}

const recordEdit = (oldMessage: Message) : void => {
    oldEdit = oldMessage;
}

const getDeleted = () : Embed | null => {
    if (deletedMessage) {
        const embed = new Embed()
            .setAuthor(deletedMessage.author.tag, deletedMessage.author.avatarURL() as string)
            .addField('Message', deletedMessage.content);

        return embed;
    }

    return null
}

const getEdit = () : Embed | null => {
    if (oldEdit) {
        const embed = new Embed()
            .setAuthor(oldEdit.author.tag, oldEdit.author.avatarURL() as string)
            .addField('Message', oldEdit.content);

        return embed;
    }

    return null
}

export {
    recordDelete,
    recordEdit,
    getDeleted,
    getEdit
};