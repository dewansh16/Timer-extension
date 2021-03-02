let countdown;
const timerDisplay = document.querySelector(".displayTimeLeft");
// const endtime = document.querySelector(".displayEndTime");
const playbtn = document.querySelector(".playButton");
const pausebtn = document.querySelector(".pauseButton");
const clearbtn = document.querySelector(".clearButton");
const submitform = document.querySelector("#submit");
const checkAlert = document.querySelector("#addAlert");
const checkAlarm = document.querySelector('#addAlarm');
const alarm = document.querySelector(".alarmSound");
let isPaused = false;




const timer = (seconds) => {
    clearInterval(countdown);
    const now = Date.now();
    let then = now + seconds * 1000;
    displayTimeLeft(seconds);
    // displayEndTime(then);

    countdown = setInterval(() => {
        if (!isPaused) {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft <= 0) {
                displayTimeLeft(0);
                if (checkAlarm.checked) {
                    alarm.play();
                }
                if (checkAlert.checked) {
                    alert('The Timer is over');
                }
                clearInterval(countdown);
                return;
            }
            displayTimeLeft(secondsLeft);
        }
        else {
            then += 1000;
        }
    }, 1000);
}

const displayTimeLeft = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

// const displayEndTime = (timeStamp) => {
//     const end = new Date(timeStamp);
//     const hour = end.getHours();
//     const minutes = end.getMinutes();
//     const seconds = end.getSeconds();
//     endtime.textContent = `${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} `;
// }


submitform.addEventListener('submit', function (e) {
    e.preventDefault();
    const min = this.minutes.value;
    timer(min * 60);
    this.reset();
})




pausebtn.addEventListener('click', function () {
    isPaused = true;
})
playbtn.addEventListener('click', function () {
    isPaused = false;
})
clearbtn.addEventListener('click', function () {
    clearInterval(countdown);
    timerDisplay.textContent = "00:00"
})

