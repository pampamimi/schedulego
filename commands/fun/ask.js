const response =
["Mimo setuju!", "Kayaknya iya?", "Iyaa", "Mungkin?", "Yapp",
"Coba tanya Mimo lagi lain waktu...", "Mimo gak bisa jawab buat sekarang...", "Menurut Mimo... Gatau deh.", "Mimo gak mau jawab 🐒", "Terserah kamu ajaa, Mimo bingung",
"NGGAK!", "Mimo gak setuju", "Mimo gak tauu :(", "Tentunya enggak", "Mimo kurang setuju..."]

module.exports = {
    name: "ask",
    run: async (client, message, args) => {
        if (!args[0]) return message.reply("[🤔] Kamu mau nanya mimo apaa?")
        message.reply(`[🦧] ${response[Math.floor(Math.random() * response.length)]}`)
    },
}