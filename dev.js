const bot = require('./bot');

bot.launch().then(() => {
    console.log('Bot start dev');
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

