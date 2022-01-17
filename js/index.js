const durationInput = document.getElementById('duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')

timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started!!")
  },
  onTick() {
    console.log("Timer just ticked down")
  },
  onComplete() {
    console.log("Timer completed!!")
  }
})



















