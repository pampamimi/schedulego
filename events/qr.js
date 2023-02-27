const client = require("../index")
const qrcode = require('qrcode-terminal')

client.on("qr", qr => { qrcode.generate(qr, {small: true} ) })