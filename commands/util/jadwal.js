const jadwal = require("../../jadwal.json")

const dayIndex = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]

module.exports = {
    name: "jadwal",
    run: async (client, message, args) => {

        let day = new Date().getDay() - 1

        if (args[0]) {

            const _day = args[0].toLowerCase()

            if (_day == "besok")  day += 1

            else {

                if (!dayIndex.includes(_day)) return message.reply(`Mimo gatau ${_day} itu hari apa 😢`)

                day = dayIndex.indexOf(_day) - 1

            }

        }      

        if (day < 0 || day > 5) return message.reply(`HARI ${args[0] ? "MINGGU" : "INI"} LIBURRRR!! 🥳🥳🎉`)

        message.reply(`Mimo liat di jadwal, hari ${args[0] ? dayIndex[day + 1] : "ini"} mapelnya..\n• ${jadwal[day].join("\n• ")}`)

    },
}