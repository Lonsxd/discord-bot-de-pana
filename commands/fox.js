module.exports = {
    name: 'fox',
    description: "this is a fox command!",
    execute(message, args){
        message.channel.send('foxluvur is a good guy :)');
    }
}