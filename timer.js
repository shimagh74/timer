class Timer {
    constructor(counter) {
        this.counter = counter
        this.count()
    }

    start() {
        this.timerInterval = setInterval(() => {
            this.counter++
            this.count()
        }, 100)
    }
    stop() {
        clearInterval(this.timerInterval)
    }
    reset() {
        this.stop()
        this.counter = 0
        this.count()
    }
    count() {
        this.sec = String(this.counter % 60).padStart(2, '0')
        this.minute = String(parseInt(this.counter / 60) % 60).padStart(2, '0')
        document.getElementById('timer').innerText = `${this.minute}:${this.sec} `
    }
}
const timer = new Timer(0)
document.getElementById('timer').addEventListener('onclick', timer.start)


// let count = 3550;
// const timerInterval = setInterval(function () {
//
//     count++
//     const sec =String(count % 60).padStart(2,'0')
//     const minute =String(parseInt(count / 60) % 60).padStart(2,'0')
//     const hour =String(parseInt(count / (60*60) % 60)).padStart(2,'0')
//
//     document.getElementById('timer').addEventListener('keypress',function () {
//
//     })
//
//         // innerText = `${hour}:${minute}:${sec} `
//     if(count>= 3600)
//         clearInterval(timerInterval)
// },100)
//
// document.getElementById('timer')
//     .addEventListener('keypress', function (event) {
//         if ()
//         clearInterval(timerInterval)
//
//     },1000)








