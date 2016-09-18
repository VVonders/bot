const Discord = require('discord.js');
const client = new Discord.Client();
var token = require('./token.json').token;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
  else if (message.content === 'meh') {
    message.reply('meh');
  }
});

client.login(token);
