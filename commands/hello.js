module.exports = {
    name: 'hello',
    description: "this is a hello command!",
    execute(message, args){
        message.channel.send('hello wats up bro');
    }
}