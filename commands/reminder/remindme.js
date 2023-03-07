const { writeFile, readFile } = require("fs");

module.exports = {
    name: "remindme",
    run: async (client, message, args) => {
        let timeuser = args[0]
        let reason = args.slice(1).join(" ")

        if(!timeuser) return message.reply("Kayaknya kamu lupa masukin durasii! contohnya ginii: 10m 10s 10d")
        if(!reason) return message.reply("Seharusnya kamu masukin apa yang mau diingetin Mimoo!! contohnya: ulangan mtk, remedial ekonomi, dll!")

        //db.set(`remind.${message.author.id}`,Date.now() + ms(timeuser))

        writeFile("./reminders.json", JSON.stringify("ass"), "utf8", x => { if (x) throw x })

        message.reply(`Mimo bakalan ingetin kamu mengenai ${reason} setelah ${timeuser}`)


    },
}