module.exports = {
    name: 'how are you',
    description: "this is a how are you command!",
    execute(message, args){
        message.channel.send('good and you?');
    }
}