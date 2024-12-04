const { axios, chalk, fs, process } = require('./module'),
{ watchFile, unwatchFile } = fs;

module.exports = async (MannR, bot, command, text) => {
  
  switch (command) {
    case "tes": {
      bot.reply("Horee Bisa")
    }
    break
  }
}

process.on('uncaughtException', function (e) {
  console.log('Caught exception', e);
})

let file = require.resolve(__filename);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright(`File has been changed: ${__filename}`));
  delete require.cache[file];
  require(file);
});
