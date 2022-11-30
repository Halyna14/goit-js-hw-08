import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(currentTime, seconds);
}
setCurrentTime();
function setCurrentTime() {
  if (!localStorage.getItem(currentTime)) {
    return;
  }
  player.setCurrentTime(localStorage.getItem(currentTime));
}
