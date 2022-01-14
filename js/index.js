class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }

  start() {
    console.log('Time to start the Timer!!')
  }
  pause() {
    console.log("Pause the execution!!")
  }
}


const durationInput = document.getElementById('input')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')


timer = new Timer(durationInput, startButton, pauseButton)
