import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gojo,
            description: 'Displays info about pain.',
            category: 'general',
            usage: `${client.config.prefix}gojo`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/49d7f2ea6bf7d9c7938ab.mp4','https://telegra.ph/file/76dfbe1b38a29a999e454.mp4','https://telegra.ph/file/bd71998ba0dcc50e7df1f.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Hey I'm GOJO, a learner/student & an upcoming developer in the future.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/916301185837

⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/NAGATOPAIN07/NAGATOPAIN07

📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/blackpanther00736

🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
｟𝖢𝗈𝗆𝗂𝗇𝗀 𝖲𝗈𝗈𝗇｠

⪼𝖲𝖾𝖾 𝗒𝖺𝗁😉✨` }
        )
    }
}
