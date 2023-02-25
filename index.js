const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
     authStrategy: new LocalAuth()
})

client.on("qr", qr => {
    qrcode.generate(qr, {small: true} );
})

client.on('ready', () => {
    console.log("ScheduLEGO has logged in!")
});

client.initialize();
 
client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});