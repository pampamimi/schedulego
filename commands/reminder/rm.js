const { writeFile, readFile } = require("fs");
let id

module.exports = {
    name: "rm",
    run: async (client, message, args) => {
        
        let reason = args.slice(1).join(" ")
        let errmsg = "[⚠] Tolong masukan durasi! contoh durasi bisa seperti: 5s > 5 detik (second), 5m > 5 menit (minute) dst.."

        if(!args[0]) return message.reply(errmsg)

        let timeuser = require("ms")(args[0])

        if (typeof timeuser == 'undefined') return message.reply(errmsg)
        if(!reason) return message.reply("[⚠] Tolong masukan remindernya! contoh: ulangan mtk, remedial ekonomi, dll!")

        readFile("./reminders.json", "utf8", (err, data) => {

            id = Date.now() + timeuser

            if (err || !data) throw "Make sure you have reminders.json file that contains an empty object!"
            data = JSON.parse(data)
            data.push({ "reason": reason, "time": id, "from": message.author ? message.author : message.from })
            writeFile("./reminders.json", JSON.stringify(data, null, 2), "utf8", x => { if (x) throw x })
            require("../../events/ready")()

            message.reply(`[🦧] Mimo bakalan ingetin kamu mengenai *${reason}* setelah ${args[0]}. ID: ${id}`)

        })

    },
}