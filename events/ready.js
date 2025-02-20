const { ActivityType } = require('discord.js');
const colors = require('../UI/colors/colors');
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {

        const statusMessages = ["🎮 Playing Genshin Impact", "Paimon, best travel companion ever!", "I am eating Hamburger", "and Potato", "everyday!", "Potato is", "YAY!!!", "Vegetables", "YAY!!!", "eating eating eating eating", "EVERY NIGHT!!!"];
        const statusTypes = [ 'dnd', 'idle'];
        const activities = [
            { name: 'Genshin Impact', type: ActivityType.Playing },
            //{ name: 'Netflix', type: ActivityType.Watching },
            //{ name: 'on YouTube', type: ActivityType.Streaming },
            //{ name: 'Spotify', type: ActivityType.Listening },
        ];

     
        const statuses = ['online'];//, 'idle', 'dnd'];

     
        let currentActivityIndex = 0;
        let currentStatusIndex = 0;
        let currentStatusMessIndex = 0;
        let currentTypeIndex = 0;

 
        function setActivityAndStatus() {
        
            const activity = activities[currentActivityIndex];
            const status = statuses[currentStatusIndex];
            const currentStatusMess = statusMessages[currentStatusMessIndex];
            const currentType = statusTypes[currentTypeIndex];

          
            client.user.setPresence({
                activities: [{ name: currentStatus, type: ActivityType.Custom }],
                status: currentType,
            });

            
            currentActivityIndex = (currentActivityIndex + 1) % activities.length;
            currentStatusIndex = (currentStatusIndex + 1) % statuses.length;
            currentStatusMessIndex = (currentStatusMessIndex + 1) % statusMessages.length;
            currentTypeIndex = (currentTypeIndex + 1) % statusTypes.length;
        }

        
        setTimeout(() => {
            setActivityAndStatus();
            console.log('\n' + '─'.repeat(40));
            console.log(`${colors.magenta}${colors.bright}🔗  ACTIVITY STATUS${colors.reset}`);
            console.log('─'.repeat(40));
            console.log('\x1b[31m[ CORE ]\x1b[0m \x1b[32m%s\x1b[0m', 'Bot Activity Set Successful ✅');
        }, 2000);

        setInterval(() => {
            setActivityAndStatus();
        }, 6000);
    },
};
