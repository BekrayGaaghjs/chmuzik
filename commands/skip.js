module.exports = {
  name: "skip",
  description: "Skip the song or shift song to next",
  execute(client, message, args) {
    const { channel } = message.member.voice;

    if (!channel) {
  
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }
   
  

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Atlayabileceğim bir şarkı yok.");
    }
    
 if (message.react('👌')) 
    serverQueue.connection.dispatcher.end();
    message.channel.send({embed: {"description":(`Passed [${serverQueue.songs[0].title}](https://s)`), "color": "YELLOW"}});
  }
};
