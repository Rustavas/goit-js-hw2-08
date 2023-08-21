
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_PLYER = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe); 

const writeTime = ({seconds}) => {
    try {
        const playedData = JSON.stringify(seconds);
        localStorage.setItem(TIME_PLYER, playedData)
    } catch (error) {    
    }  
};
const readTime = (key) => {
    try {
        const playedData = localStorage.getItem(key);
        return playedData === null ? 0 : JSON.parse(playedData);
    } catch (error) {     
    }
}

player.on('timeupdate', throttle(writeTime, 1000));
player.setCurrentTime(readTime(TIME_PLYER));