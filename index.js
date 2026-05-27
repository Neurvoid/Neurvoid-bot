require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose');

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
});

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Bot is working 🚀");
});

console.log("Bot started");
