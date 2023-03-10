const { writeFile, readFile } = require("fs");

module.exports = {
    name: "remindme",
    run: async (client, message, args) => {
        let timeuser = args[0]
        let reason = args.slice(1).join(" ")

        if(!timeuser) return message.reply("Kayaknya kamu lupa masukin durasii! contohnya ginii: 10m 10s 10d")
        if(!reason) return message.reply("Seharusnya kamu masukin apa yang mau diingetin Mimoo!! contohnya: ulangan mtk, remedial ekonomi, dll!")

        //db.set(`remind.${message.author.id}`,Date.now() + ms(timeuser))

        readFile("./reminders.json", "utf8", (err, data) => {
            if (err) throw err
            data = JSON.parse(data)
            data[Date.now().toString(36) + Math.random().toString(36).slice(2)] = { "reason": reason, "time": timeuser, "from": message.from }
            //JSON.parse(data)

            writeFile("./reminders.json", JSON.stringify(data, null, 2), "utf8", x => { if (x) throw x })
        })

        message.reply(`Mimo bakalan ingetin kamu mengenai ${reason} setelah ${timeuser}`)

    },
}