window.onload = function () {

    let mySeconds = document.getElementById("seconds");
    let myTens = document.getElementById("tens");
    let myStartBtn = document.getElementById("button-start");
    let myStopBtn = document.getElementById("button-stop");
    let myResetBtn = document.getElementById("button-reset");
    let myMinutes = document.getElementById("minutes");
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let interval;

    myStartBtn.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            myTens.innerHTML = "0" + tens;
        } else {
            myTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            mySeconds.innerHTML = seconds <= 9 ? "0" + seconds : seconds;
            tens = 0;
            myTens.innerHTML = "0" + tens;
        }

        if (seconds >= 60) {
            seconds = 0;
            mySeconds.innerHTML = "0" + seconds;
            minutes++;
            myMinutes.innerHTML = minutes <= 9 ? "0" + minutes : minutes;
        }

        myStopBtn.onclick = function () {
            clearInterval(interval);
        }

        myResetBtn.onclick = function () {
            clearInterval(interval);
            tens = 0;
            seconds = 0;
            minutes = 0;
            myTens.innerHTML = "00";
            mySeconds.innerHTML = "00";
            myMinutes.innerHTML = "00";
        }
    }
}
