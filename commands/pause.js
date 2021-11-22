module.exports = {
  name: "stop",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("Herhangi bir ses kanalında bulunmalısınız.");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("Duraklatabileceğim bir şarkı bulamadım.");
    }
    if(!serverQueue.playing) return message.channel.send('Şarkılar Zaten Duraklatılmış.')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      
      if (message.react('🛑'))  serverQueue.connection.dispatcher.end();
    message.channel.send({embed: {"description":(`Stopped [${serverQueue.songs[0].title}](https://s)`), "color": "YELLOW"}});
  }  
  }
}
