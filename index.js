const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({ authStrategy: new LocalAuth() })
module.exports = client

client.commands = new Map()
client.config = require("./config.json")

require("./handler")(client)

client.initialize();
