const client = require("../index")

client.on("message", async (message) => {

    if (!message.body.toLowerCase().startsWith(client.config.prefix)) return

    const [cmd, ...args] = message.body.slice(client.config.prefix.length).trim().split(/ +/g)

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))

    if (!command) return

    await command.run(client, message, args)
    
})