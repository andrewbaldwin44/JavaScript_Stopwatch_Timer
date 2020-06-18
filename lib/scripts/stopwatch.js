const stopwatchHours = document.querySelector('#stopwatch-hours');
const stopwatchMinutes = document.querySelector('#stopwatch-minutes');
const stopwatchSeconds = document.querySelector('#stopwatch-seconds');
const stopwatchDisplay = [stopwatchHours, stopwatchMinutes, stopwatchSeconds];
const stopwatchPlayButton = document.querySelector('#stopwatch-play-button');
const stopwatchPauseButton = document.querySelector('#stopwatch-pause-button');
const stopwatchRestartButton = document.querySelector('#stopwatch-restart-button');

const stopwatch =
  new Clock(stopwatchDisplay, stopwatchPlayButton,
            stopwatchPauseButton, stopwatchRestartButton)

window.onload = () => {
  stopwatch.startClock();
}
