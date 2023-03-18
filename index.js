const { Client, LocalAuth } = require("whatsapp-web.js")

const client = new Client({ authStrategy: new LocalAuth() })
module.exports = client

client.commands = new Map()
client.config = require("./config.json")

require("./handler")(client)

client.initialize();

try {
    require("./reminders.json")[0]
} catch {
    require("fs").writeFileSync("reminders.json", "[]")
    console.log("Created reminders.json because it doesn't exist")
}

console.log("Please wait a moment until it's logged on :)")