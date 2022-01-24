const TelegramApi = require("node-telegram-bot-api")
let cron = require('node-cron');
const BOT_TOKEN = '5261865047:AAGzwuVh-umtjvKS7W36Uw5M4HyYRPEVW04'

const bot = new TelegramApi(BOT_TOKEN, { polling: true })

bot.setMyCommands([
  { command: '/start', description: "Boshlangich" },
  { command: '/clock', description: "Pamidor" },
])



bot.on('message', (msg) => {
  const name = msg.chat.first_name
  const text = msg.text
  const chatId = msg.chat.id
  // console.log(photo);
  const data = new Date()
  if (text == '/start') {
    return bot.sendMessage(chatId, `Assalomu aleykum ${name} soat ${data.toLocaleTimeString()} bo'ldi`);
  }
  else if (text == '/clock') {
    console.log('hello');
    bot.sendMessage(chatId, `${name} vaxt ${data.toLocaleTimeString()} bo'ldi dedim sizga`);
  }
  else if (data.toLocaleTimeString() == '16:26:00') {
    bot.sendMessage(chatId, `${name} vaxt ${data.toLocaleTimeString()} bo'ldi`);
  }
  else {
    bot.sendMessage(chatId,`Xato ma'lumot`);
  }
});