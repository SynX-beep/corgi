//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://icorgi.cf
 * @INFO
 * Work for S7NX Shitz | https://icorgi.cf
 * @INFO
 * Please mention him / S7NX Shitz, when using this Code!
 * @INFO
 */
