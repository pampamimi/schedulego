const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

// const client = new Client({
//      authStrategy: new LocalAuth({
//           clientId: "client-one"
//      })
// })

// to commit qr code when not logged in
client.on("qr", qr => {
    qrcode.generate(qr, {small: true} );
})

// ready event
client.on('ready', () => {
    console.log("ScheduLEGO has logged in!")
});

client.initialize();

// message event
client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});