const switchTimerButton = document.querySelector('#switch-timer-button');
const switchStopwatchButton = document.querySelector('#switch-stopwatch-button');
const stopwatchInterface = document.querySelector('#stopwatch-interface');
const timerInterface = document.querySelector('#timer-interface');

function setAnimation(element, animation = '') {
  element.style.animationName = animation
}

switchTimerButton.addEventListener('click', () => {
  setAnimation(stopwatchInterface, 'stopwatchScrollLeft');
  setAnimation(timerInterface, 'timerScrollLeft');
  switchTimerButton.disabled = true;
  switchStopwatchButton.disabled = false;
});

switchStopwatchButton.addEventListener('click', () => {
  setAnimation(stopwatchInterface, 'stopwatchScrollRight');
  setAnimation(timerInterface, 'timerScrollRight');
  switchTimerButton.disabled = false;
  switchStopwatchButton.disabled = true;
});
