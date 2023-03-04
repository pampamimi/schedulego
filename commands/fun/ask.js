const response =
["iyh banh", "y", "Setuju", "mungkin?", "iyah",
"coba tanya lagi", "gak bisa jawab untuk skrg", "hmm apa y", "gmw jwb", "terserah ajh",
"g", "gmw", "jgn", "jangan", "tentu tidak"]

module.exports = {
    name: "ask",
    run: async (client, message, args) => {
        if (!args[0]) return message.reply("Tanya sebuah pertanyaan yang jawabannya positif atau negatif")
        message.reply(response[Math.floor(Math.random() * response.length)])
    },
}