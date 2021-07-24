module.exports = {
    name: 'kick',
    description: "this is a kick command!",
    execute(message, args){
        const member = message.mention.users.first();
        if (member){
            const memberTarger = message.guild.members.cache.get(member.id);
            member.memberTarger.kick();
            message.channel.send("user has been kicked")

        }else{
            message.channel.send('You couldnt kick that member');
        }
    }
}