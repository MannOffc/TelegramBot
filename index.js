require('./lib/configs')
const {
  Telegraf,
  Context
} = require('telegraf')

const handler = require('./handler');

const bot = new Telegraf(global.botTelegram)
const start = async () => {
  bot.on('callback_query', async (MannR) => {
    console.log(MannR)
    action = MannR.callbackQuery.data.split(' ')
    args = action
    user_id = Number(action[1])
    if (MannR.callbackQuery.from.id != user_id) return MannR.answerCbQuery('Uppss... this button not for you!', {
      show_alert: true
    })
  })
  bot.on('message', async (MannR) => {
    handler(MannR, bot)
  })

  bot.launch({
    dropPendingUpdates: true
  })

  bot.telegram.getMe().then((getme) => {
    console.table({
      "Bot Name": getme.first_name,
      "Username": "@" + getme.username,
      "ID": getme.id,
      "Link": `https://t.me/${getme.username}`,
      "Author": "https://t.me/MannRzyn"
    })
  })
}

start()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
