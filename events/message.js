const client = require("../index")

client.on("message", async (message) => {

  // a super necessary code i added because im cool becaues im the dev i can do anything
  if (message.body.toLowerCase() == "goof gunk") return client.sendMessage(message.from, 'goof gunk');

    if (!message.body.toLowerCase().startsWith(client.config.prefix)) return

    const [cmd, ...args] = message.body.slice(client.config.prefix.length).trim().split(/ +/g)

    const command = client.commands.get(cmd.toLowerCase())

    if (!command) return

    await command.run(client, message, args)
    
})


// client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()))

/* Example of "find" methods, scrapped from Discord.Collection (discord.js)
  find(fn, thisArg) {
    if (typeof thisArg !== "undefined")
      fn = fn.bind(thisArg);
    for (const [key, val] of this) {
      if (fn(val, key, this))
        return val;
    }
*/