const { Client, GatewayIntentBits } = require('discord.js');
const { BrowserWindow, ipcMain } = require('electron');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {
    if (!message.author.bot) {
        const allWindows = BrowserWindow.getAllWindows();
        allWindows.forEach(win => {
            win.webContents.send('message', `${message.author.username}: ${message.content}`);
        });
    }
});

client.login('token');
