const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/jarvis-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Joel Mathew*
*Creator number : wa.me/917034526003?text=Hi%20Ameer%20Suhail.%20*
*Bot setting video : https://youtube.com/channel/UC_gb_2HnOdeY0c1h6wwMyQw*
*Githublink (Setup)  :    https://github.com/rippster-joel/jarvis*
*Audio commads :   https://github.com/rippster-joel/jarvis/tree/master/uploads*
*Sticker commads : https://github.com/rippster-joel/jarvis/tree/master/uploads*
`}) 

}));
