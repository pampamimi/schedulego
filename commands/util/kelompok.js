const _murid = require("../../murid.json")

let murid = []

_murid.forEach(x => { murid.push(x) })

const jml_murid = murid.length

module.exports = {
    name: "kelompok",
    run: async (client, message, args) => {
        
        if(!args[0] || isNaN(args[0])) return message.reply("[❓] Murid akan dibagi menjadi berapa kelompok?")

        const jml_kel = parseInt(args[0])

        if (jml_kel > jml_murid) return message.reply("[⚠] Kelompok tidak bisa lebih dari " + jml_murid)

        let kel = []
        let k = 0

        for (i = 0; i < jml_kel; i++) kel.push([])

        for (i = 0; i < jml_murid; i++) {
            let rand = Math.floor(Math.random() * murid.length)
            kel[k].push(murid[rand])
            murid.splice(rand, 1)
            k < jml_kel - 1 ? k++ : k = 0
        }

        let z = []

        kel.forEach((x, i) => {
            z.push(`\n*Kelompok ${i + 1}*`)
            x.forEach((y, j) => {
                z.push(`${j + 1}. ${y}`)
            })
        })

        client.sendMessage(message.from, "[✏] Mimo udah ngacak kelompoknya, dan ini hasilnya!\n" + z.join("\n"));

        _murid.forEach(x => { murid.push(x) })

    },
}