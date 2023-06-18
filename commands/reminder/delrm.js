const { writeFile, readFile } = require("fs");

module.exports = {
    name: "delrm",
    run: async (client, message, args) => {

        let id = args[0]

        if(!args[0]) return message.reply("[⚠] Tolong masukkan ID dari reminder yang ingin kamu hapus!")

        readFile("./reminders.json", "utf8", (err, data) => {

            if (err || !data) throw "Make sure you have reminders.json file that contains an empty object!"

            data = JSON.parse(data)
            let cursor = -1,
                isDone = false

            for(let reminders of data){
                cursor++
                if(reminders["time"] == id && reminders["from"] == message.from) {
                    data.splice(cursor, 1)
                    writeFile("./reminders.json", JSON.stringify(data, null, 2), "utf8", x => { if (x) throw x })
                    require("../../events/ready")()
                    isDone = true
                    break;
                }
            }

            if (isDone) message.reply(`[🗑️] Mimo telah menghapus reminder dengan ID: ${id}`)
            else message.reply(`[⚠] Mimo gagal menghapus remindernya, pastikan ID nya cocok!`)

            cursor = -1 

        })

    },
}

/*
[
  {
    "reason": "yesa",
    "time": 1687122870663,
    "from": "6282114398305@c.us"
  },
  {
    "reason": "yesb",
    "time": 1687122870929,
    "from": "6282114398305@c.us"
  },
  {
    "reason": "yesc",
    "time": 1687122871571,
    "from": "6282114398305@c.us"
  }
]
*/