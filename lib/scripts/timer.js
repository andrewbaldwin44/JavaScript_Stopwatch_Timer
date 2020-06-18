const timerPlayButton = document.querySelector('#timer-play-button');

timerPlayButton.addEventListener('click', () => {
  const timerHours = document.querySelector('#time-element-hours');
  const timerMinutes = document.querySelector('#time-element-minutes');
  const timerSeconds = document.querySelector('#time-element-seconds');
  const timerDisplay = [timerHours, timerMinutes, timerSeconds];
  const timerPauseButton = document.querySelector('#timer-pause-button');
  const timerRestartButton = document.querySelector('#timer-restart-button');

  let hours = document.querySelector('#time-element-hours').textContent;
  let minutes = document.querySelector('#time-element-minutes').textContent;
  let seconds = document.querySelector('#time-element-seconds').textContent;

  const timer =
    new Clock(timerDisplay, timerPlayButton, timerPauseButton, timerRestartButton,
              hours, minutes, seconds, -1);

  timer.startClock();
});

switchTimerButton.addEventListener('click', () => {
  stopwatch.pauseClock();
});

switchStopwatchButton.addEventListener('click', () => {
  stopwatch.startClock();
});
