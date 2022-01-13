class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start)
  }

  start() {
    console.log('Time to start the Timer!!')
  }
}


const durationInput = document.getElementById('input')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')


timer = new Timer(durationInput, startButton, pauseButton)
