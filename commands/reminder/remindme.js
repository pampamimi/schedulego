const { writeFile, readFile } = require("fs");

module.exports = {
    name: "remindme",
    run: async (client, message, args) => {
        
        let timeuser = require("ms")(args[0])

        let reason = args.slice(1).join(" ")

        if(!args[0] || typeof timeuser == 'undefined') return message.reply("Kayaknya kamu lupa masukin durasii! contohnya ginii: 10m 10s 10d")
        if(!reason) return message.reply("Seharusnya kamu masukin apa yang mau diingetin Mimoo!! contohnya: ulangan mtk, remedial ekonomi, dll!")

        readFile("./reminders.json", "utf8", (err, data) => {

            if (err || !data) throw "Make sure you have reminders.json file that contains an empty object!"

            data = JSON.parse(data)

            data.push({ "reason": reason, "time": Date.now() + timeuser, "from": message.author ? message.author : message.from })

            writeFile("./reminders.json", JSON.stringify(data, null, 2), "utf8", x => { if (x) throw x })

            require("../../events/ready")()

            message.reply(`Mimo bakalan ingetin kamu mengenai ${reason} setelah ${args[0]}`)

        })

    },
}