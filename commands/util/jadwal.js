const jadwal = require("../../jadwal.json")

module.exports = {
    name: "jadwal",
    run: async (client, message, args) => {
        const day = new Date().getDay() - 1
        const sched = jadwal[day]  

        if (day < 0) return message.reply("HARI INI LIBURRRR!! 🥳🥳🎉")
        message.reply(`Mimo liat di jadwal, hari ini mapelnya..\n• ${sched.join("\n• ")}`)
    },
}