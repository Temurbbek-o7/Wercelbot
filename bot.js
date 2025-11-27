// const { Telegraf } = require("telegraf");

// const bot = new Telegraf("");

// bot.start((ctx) => ctx.reply("Assalomu alaykum! " + ctx.from.first_name));
// bot.help((ctx) => ctx.reply("Biror biror gap yuboring"));
// bot.on("text", (ctx) => ctx.reply(ctx.message.text));

// module.exports = bot;




const { Telegraf } = require("telegraf");
const fs = require("fs");

const bot = new Telegraf("8260423420:AAFBxWfOK062QaXmSqTYKa5GboUKdTTH_Rk");


const names = JSON.parse(fs.readFileSync("names_real.json" , "utf-8"));


bot.start((ctx) =>
  ctx.reply(
    "Assalomu alaykum! 😊\nIsm ma’nosini biluvchi botga xush kelibsiz.\n\nIsm yuboring — men sizga uning ma’nosini aytaman."
  )
);

bot.help((ctx) => ctx.reply("Ism yuboring. Masalan: Ali, Zaynab, Temur"));


bot.on("text", (ctx) => {
  const text = ctx.message.text.trim().toLowerCase();

  if (names[text]) {
    ctx.reply(`**${text.charAt(0).toUpperCase() + text.slice(1)}** – ${names[text]}`, {
      parse_mode: "Markdown",
    });
  } else {
    ctx.reply("Kechirasiz, bu ism bazada yo‘q 😔\nBoshqa ism yuborib ko‘ring.");
  }
});

module.exports = bot;
