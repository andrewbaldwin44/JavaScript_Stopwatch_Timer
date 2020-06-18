class TimeInput {
  constructor() {
    this.timeInput = document.querySelector('#time-input');
    this.timeElements = document.querySelectorAll('.time-element');
    this.hourTimeElement = document.querySelector('#time-element-hours');
    this.timeSelectorContainer = document.querySelector('#time-selector-container');
    this.increaseTime = document.querySelector('#increase-time');
    this.decreaseTime = document.querySelector('#decrease-time');

    this.timeElementsArray = [...this.timeElements];
    this.keepFocusElementIDs = ['time-selector-container', 'increase-time',
                                'decrease-time', 'time-input', 'time-input-container'];

    this.timeElementFocus = null;
    this.inputedItems = 0;
  }

  initializeEventListeners() {
    this.timeElementsArray.forEach(timeElement => {
      timeElement.addEventListener('click', () => this.highlight(event.target));
    });

    this.timeInput.addEventListener('mouseover', () => this.showTimeSelector());
    this.timeInput.addEventListener('mouseleave', () => {
      if (this.timeElementFocus === null) this.hideTimeSelector();
    });

    this.increaseTime.addEventListener('click', () => this.changeValue(1));
    this.decreaseTime.addEventListener('click', () => this.changeValue(-1));

    window.onclick = () => this.changeFocus();

    window.addEventListener('keydown', () => this.inputKey());
  }

  takeFocus(element) {
    this.showTimeSelector();
    this.timeElementFocus = element;
  }

  loseFocus(element) {
    this.hideTimeSelector();
    this.timeElementFocus = null;
  }

  showTimeSelector() {
    this.timeSelectorContainer.style.display = 'flex';
  }

  hideTimeSelector() {
    this.timeSelectorContainer.style.display = 'none';
  }

  highlight(element) {
    element.style.backgroundColor = '#1e88e5';
    this.takeFocus(element);
  }

  removeHighlight(element) {
    element.style.backgroundColor = 'transparent';
  }

  changeValue(value) {
    if (this.timeElementsFocus === null) {
      this.timeElementFocus = this.hourTimeElement;
      this.highlight(this.hourTimeElement);
    }

    let nextValue = (Number(this.timeElementFocus.textContent) + value).toString();

    if (nextValue.length < 2) nextValue = `0${nextValue}`;
    if (nextValue < 0) nextValue = '60';
    if (nextValue > 60) nextValue = '00';

    this.timeElementFocus.textContent = nextValue;
  }

  inputKey() {
    if (event.key >= 0 && event.key <= 9) {
      let lastInput = this.timeElementFocus.textContent.substr(1);
      let newValue = `${lastInput}${event.key}`;

      if (newValue > 60) newValue = 60;

      this.timeElementFocus.textContent = newValue;
      this.inputedItems++;

      if (this.inputedItems == 2) {
        let timeElementIndex = this.timeElementsArray.indexOf(this.timeElementFocus);
        this.inputedItems = 0;

        if (timeElementIndex < this.timeElementsArray.length - 1) {
          timeElementIndex += 1;
        }

        this.removeHighlight(this.timeElementFocus);
        this.timeElementFocus = this.timeElementsArray[timeElementIndex];
        this.highlight(this.timeElementFocus);
      }
    }
  }

  changeFocus() {
    this.timeElementsArray.forEach(timeElement => {
      if (timeElement.id != event.target.id &&
          !this.keepFocusElementIDs.includes(event.target.id) &&
          !event.target.classList.contains('seperator')) {

        this.removeHighlight(timeElement);
      }
      if (!event.target.classList.contains('time-input-element')) {
        this.loseFocus();
      }
    });
  }
}

new TimeInput().initializeEventListeners();
