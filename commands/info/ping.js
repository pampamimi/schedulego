module.exports = {
    name: "ping",
    run: async (client, message, args) => {
        console.log(client)
        console.log(args)
        console.log(client.ws)
        client.sendMessage(message.from, 'pong');
    },
}

//client.ws.ping