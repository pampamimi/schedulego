const { writeFile, readFile } = require("fs");

module.exports = {
    name: "remindme",
    run: async (client, message, args) => {
        let timeuser = args[0]
        let reason = args.slice(1).join(" ")

        if(!timeuser) return message.reply("Kayaknya kamu lupa masukin durasii! contohnya ginii: 10m 10s 10d")
        if(!reason) return message.reply("Seharusnya kamu masukin apa yang mau diingetin Mimoo!! contohnya: ulangan mtk, remedial ekonomi, dll!")

        readFile("./reminders.json", "utf8", (err, data) => {

            if (err || !data) throw "[Error: Make sure you have reminders.json file that contains an empty object!]"

            data = JSON.parse(data)
            data[Date.now().toString(36) + Math.random().toString(36).slice(2)] = { "reason": reason, "time": Date.now() + require("ms")(timeuser), "from": message.from }

            writeFile("./reminders.json", JSON.stringify(data, null, 2), "utf8", x => { if (x) throw x })

            message.reply(`Mimo bakalan ingetin kamu mengenai ${reason} setelah ${timeuser}`)

        })

    },
}