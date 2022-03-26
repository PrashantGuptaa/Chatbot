var config_data = {

    //Important Keys and yet to be moved to vault or key vault.
    mongoDB_connection_string: "mongodb+srv://financeBot:qaokEsYovGuzKGdb@cluster1.s6yie.mongodb.net/FinanceBot",
    dialogFlow_Key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmcgxyKWxTZLiy\n+pmiAjV8MUD5pF3NKq+sN6Bmz1ELrdLAVYqJ0REr/4WOiRIEvsEy0dHdi/yVYXlP\nonYmcE24l+Mo325RoNoTtMx8oIfscGHKdz4pq0dYVzTbTyjmfLNvYxOXnqujrR5W\nQ8AX4h+GRzWtZW1zbgYSBCdMX7edtir44shKtzh1DiJXKxBKXLXJRRaIOx82lvnz\n/qD2x+zt2KXheAi0ahKOfWFS4t5nDKnVXGlVLRfMkBnznB9vNW2reRT8b29t3bhx\n4YZ0soTLf5aGh3vCzTLiK1QpJObot2CFZEjgKLprZEhSGx9eq77gPMXdFCYa8uiX\n8YSa0fQFAgMBAAECggEABcChT3zBAqzTeVQR5TiAUrd9EGOu3j1gbupJP+RgX6/1\nPbJ3JEY2erfNDN0N414YXUJFJ4wEAcGpqKfrv25YMU4Gis4WCPovL0krXA9MQ06r\nAo1Wd6g0wgfZis7UkgqzROE+txnDwtdj2gVjaS/meQSTBVghDUE7Mno0RX51YRzx\nW6XRGiXiNsJ78XsTXuszEOOgK85RyEn3A0359a/FxV0L/6QzWpVTPdd+FT1bvJab\nNnLA1ikAT0GNtb0MBK9B76YAuEYGWyaDZa/hqvE9nsnKHWyqRR2qJTl1FkoRj+r/\nV9pIqvlRl5da48ISJYW83Tmi4iPzzSBRfHWiQrOOrQKBgQDZaCuzKRFC/i0RZKwu\nMlVyLkLOnsXwWUqF4T61z/7lODjKv6l8wL+J6XVdAdsLARLAGXun8F4TKPFoocGt\nxNzeayZYRNoaJ7spgbdywyHhsqfQm3TVTlLz7t2wFY1G6+mk8YlB9xzMlQr3oK8m\nlcZMPmi1VYUB9cXvmzD/7NBvHwKBgQDD/f1pc5etSDv4pqd5xeiF8NRF8RaD5ykK\n7iGKqrcB7gtNGIQtX/rNAWb3PGkHgjGLIFxCQFH1zcsdc3Lw9gqAroddaAsIgrsU\nSL5wDeqKdFihue6hR9cfUO6qUk2cX0wtaPLQ9/eiO/a0JEJG0UXtRIbbUgEThZJm\nMaJCaNsMWwKBgGhQ+Zbvv56bg1hzK8LG2AT/eYLW4DchQQbYO1TVxoKJ5YYzTMnV\nWpJ7+Jp2B3pSO4L9Nz4vsZQT8zG3W81bRndahn2YG+as5btWyIVCaAF5zdfkn7yx\n5k+xb6HL1YwQKn3Af5GtVp47bZW//grPluSClY9cx4NXQHBl0K8cHC8VAoGBAIqS\nCZmFILhjWgNz0PVH+B67J1pMGp8n0NzpgM2J5dp3c4YOz2VFdw168FHdZGTqqBy1\nxIUS9N/VoMYx2hKD4ukYfJyN8z8RLzQoOnz/WdSKbh/qVc2x/Wcm0ZeamUT2G+X/\nTa5xo6QQwVycRj/LtqUKzk5CrIAg8GFQtmg9uqIBAoGBAK23TWtrwUndiNgzdy4L\nIN1CDHMOBiw+EBREKhbWl0XWw0Srre164a13udaMFOFvitpL9YF8+f32kAmXK05X\np0Vy1LMFiobw72oObadz3pMcP5hE6P43ITEoN4X8tn4jGNTUcycSsymz2ucFXRTH\ntJu0n7UyKAU6NdM9x+Ya7WpJ\n-----END PRIVATE KEY-----\n",

    //Http server Port
    port: "5000",

    //Dialogflow and Mongo DB Configuration values
    useFindAndModify: "useFindAndModify",
    MongoDBConnectionMessage: "Mongodb connected Successfully.",
    dialogFlowProjectID: "finchatbotv1-gliy",
    dialogFlowClientEmail: "finchatbotv1@finchatbotv1-gliy.iam.gserviceaccount.com",
    DialogFlowIntentError: "DialogFlow.sendTextMessageToDialogFlow ERROR:",

    //Dialoglow Greetings
    ByeGreeting: "ByeGreetings",

    //Socket Configurations values
    socketConnection: 'connection',
    socketUsername: 'username',
    socketIsOnline: 'is_online',
    socketWelcome: '<i> Welcome to Finchat bot</i>',
    socketBotJoinedMessage: '💻 <i> Finchatbot joined the chat..</i>',
    socketDisConnect: 'disconnect',
    socketChatMessage: 'chat_message',
    socketBoTMessage: '<div style="float:left; border-radius: 50%"><img src="../images/logo.png" width="50px"></div><div style="float:left; margin-left: 20px;"><strong>Finchatbot</strong> <br><br> ',
    socketUserMessage: '<div style="float:left; border-radius: 50%"><img src="../images/human.png" width="50px"></div><div style="float:left; margin-left: 20px;"><strong>',
    socketBot: "Bot",
    socketUser: "User",
    socketRequestFailureMessage: "Failed",

    //Console Messages
    serverListenMessage: 'Finance Chatbot Bot is listening on http://localhost:5000'

}

module.exports = config_data;