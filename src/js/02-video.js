import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoTiming = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
});

const getCurrentTime = (currentTime) => {
    const seconds = currentTime.seconds;
    localStorage.setItem(videoTiming, JSON.stringify(seconds));
};


player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(videoTiming) || 0));