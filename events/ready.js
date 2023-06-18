const client = require("../index")
const { writeFile, readFile } = require("fs");

let reminder

module.exports = () => readFile("./reminders.json", "utf8", (err, data) => {

    if (err) throw "Make sure you have reminders.json file that contains an empty object!"
  
    if (data) reminder = JSON.parse(data)
  
})

client.on('ready', () => {

    console.log("Mimo has logged in!")

    module.exports()

    setInterval(() => {

        reminder.forEach((x, i) => {
    
            if(Date.now() > x.time){
                
                client.sendMessage(x.from, `[🔔] Reminder! sebelumnya kamu meminta mimo untuk mengingatkanmu tentang *${x.reason}*`)

                reminder.splice(i, 1)
                
                writeFile("./reminders.json", JSON.stringify(reminder, null, 2), "utf8", x => { if (x) throw x })
            
            }
            
        });
    
    }, 1000)
    
})