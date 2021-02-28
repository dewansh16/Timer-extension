let countdown;
const timerDisplay = document.querySelector(".displayTimeLeft");
// const endtime = document.querySelector(".displayEndTime");
const playbtn = document.querySelector(".playButton");
const pausebtn = document.querySelector(".pauseButton");
const clearbtn = document.querySelector(".clearButton");

let isPaused = false;





const timer = (seconds) => {
    const now = Date.now();
    let then = now + seconds * 1000;
    displayTimeLeft(seconds);
    // displayEndTime(then);

    countdown = setInterval(() => {
        if (!isPaused) {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            if (secondsLeft <= 0) {
                displayTimeLeft(0)
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