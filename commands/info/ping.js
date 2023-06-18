module.exports = {
    name: "ping",
    run: async (client, message, args) => { client.sendMessage(message.from, '[🏓] PONG!') }
}