const client = require("../index")

client.on("qr", qr => { require('qrcode-terminal').generate(qr, {small: true} ) })