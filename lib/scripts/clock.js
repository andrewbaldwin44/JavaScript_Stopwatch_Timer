class Clock {
  constructor(clockDisplay, playButton, pauseButton, restartButton,
              hours = 0, minutes = 0, seconds = 0, interval = 1) {
    this.titleDisplay = document.querySelector('title');
    this.clockDisplay = clockDisplay;
    this.playButton = playButton;
    this.pauseButton = pauseButton;
    this.restartButton = restartButton;

    this.chime = new Audio("assets/sounds/chime.mp3");

    this.initialHours = hours;
    this.initialMinutes = minutes;
    this.initialSeconds = seconds;
    this.interval = interval;

    this.clock = new Date();
    this.setClock();
    this.addEventListeners();
  }

  addEventListeners() {
    this.playButton.addEventListener('click', () => {
      if (!this.playButton.classList.contains('disabled')) this.startClock();
    });

    this.pauseButton.addEventListener('click', () => this.pauseClock());

    this.restartButton.addEventListener('click', () => {
      this.restartButton.classList.add('resetRotate');
      this.restartButton.addEventListener('animationend', () => {
        this.restartButton.classList.remove('resetRotate')
      });

      this.restartClock();
    });

    window.addEventListener("keydown", () => {
      if (event.key == " ") {
         !this.playButton.classList.contains('disabled') ? this.startClock() : this.pauseClock();
      }
    });
  }

  setClock() {
    this.clock.setHours(this.initialHours);
    this.clock.setMinutes(this.initialMinutes);
    this.clock.setSeconds(this.initialSeconds);
  }

  padZeroes(time) {
    return String(time).length == 1 ? `0${time}` : time;
  }

  setClockDisplay() {
    this.currentTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    this.clockDisplay[0].textContent = this.hours;
    this.clockDisplay[1].textContent = this.minutes;
    this.clockDisplay[2].textContent = this.seconds;
    this.setTitleDisplay();
  }

  setTitleDisplay() {
    if (focus) {
        this.titleDisplay.textContent = `(${this.currentTime}) Stopwatch`;
    } else this.titleDisplay.textContent = 'Stopwatch';
  }

  startClock() {
    this.playButton.classList.add('disabled');

    this.count =
      setInterval(() => {
        this.clock.setSeconds(this.clock.getSeconds() + this.interval);
        this.seconds = this.padZeroes(this.clock.getSeconds());
        this.minutes = this.padZeroes(this.clock.getMinutes());
        this.hours = this.padZeroes(this.clock.getHours());
        this.setClockDisplay();
        if (this.minutes == 0 && this.seconds == 0) this.endClock();
      }, 1000);
  }

  endClock() {
    this.chime.play();
    this.restartClock();
  }

  pauseClock() {
    this.playButton.classList.remove('disabled');
    clearInterval(this.count);
  }

  restartClock() {
    this.pauseClock();
    this.setClock();
    this.hours = this.padZeroes(this.initialHours);
    this.minutes = this.padZeroes(this.initialMinutes);
    this.seconds = this.padZeroes(this.initialSeconds)
    this.setClockDisplay();
  }
}

let focus = false;
window.onfocus = () => focus = false;
window.onblur = () => focus = true;
