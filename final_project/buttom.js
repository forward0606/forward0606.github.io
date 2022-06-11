
const start_stop = document.querySelector("#start_stop");
const reset = document.querySelector("#reset");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const time_bar = document.querySelector("#time_bar");

const add10min = document.querySelector("#add10min");
const add1min = document.querySelector("#add1min");
const add10sec = document.querySelector("#add10sec");
const add1sec = document.querySelector("#add1sec");

const dec10min = document.querySelector("#dec10min");
const dec1min = document.querySelector("#dec1min");
const dec10sec = document.querySelector("#dec10sec");
const dec1sec = document.querySelector("#dec1sec");

var audio = new Audio('alarm.mp3');

let count_down = null, count_down_from = parseInt(minute.innerHTML, 10) * 60 + parseInt(second.innerHTML, 10);
let left_time = count_down_from;

function timer() {
    left_time -= 1;
    let tmp = Math.floor(left_time / 60);
    minute.innerHTML = (tmp < 10 ? '0' + tmp : tmp);
    second.innerHTML = (left_time % 60 < 10 ? '0' + left_time % 60 : left_time % 60);
    let percent = Math.floor((count_down_from - left_time) * 100 / count_down_from);
    time_bar.innerHTML = ("<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + percent + "%\"></div>")
    if (left_time == 0) {
        clearInterval(count_down);
        audio.play()
        count_down = null;
        left_time = count_down_from;
        start_stop.innerHTML = "START";
    }
}

// function push() {
//     if (progress == null) {

//     }
// }

start_stop.onclick = function () {
    if (start_stop.innerHTML === "START") {
        audio.pause()
        audio.load()
        let tmp = Math.floor(left_time / 60);
        minute.innerHTML = (tmp < 10 ? '0' + tmp : tmp);
        second.innerHTML = (left_time % 60 < 10 ? '0' + left_time % 60 : left_time % 60);
        time_bar.innerHTML = '<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\"></div>';
        count_down = setInterval(timer, 1000);
        start_stop.innerHTML = "STOP";
    } else {
        start_stop.innerHTML = "START";
        clearInterval(count_down);
        count_down = null;
    }
}

reset.onclick = function () {
    clearInterval(count_down);
    count_down = null;
    left_time = count_down_from;
    show();
    time_bar.innerHTML = '<div class=\"progress-bar progress-bar-striped progress-bar-animated bg-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%\"></div>';
    start_stop.innerHTML = "START";
}


function show() {
    audio.pause()
    audio.load()
    let tmp = Math.floor(left_time / 60);
    minute.innerHTML = (tmp < 10 ? '0' + tmp : tmp);
    second.innerHTML = (left_time % 60 < 10 ? '0' + left_time % 60 : left_time % 60);
}

add10min.onclick = function () {
    left_time += 60 * 10;
    count_down_from += 60 * 10;
    show();
}
add1min.onclick = function () {
    left_time += 60 * 1;
    count_down_from += 60 * 1;
    show();
}
add10sec.onclick = function () {
    left_time += 10;
    count_down_from += 10;
    show();
}

add1sec.onclick = function () {
    left_time += 1;
    count_down_from += 1;
    show();
}


dec10min.onclick = function () {
    left_time -= 60 * 10;
    count_down_from -= 60 * 10;
    if (count_down_from <= 0) {
        count_down_from = 1;
    }
    if (left_time <= 0) {
        left_time = 1;
    }
    show();
}
dec1min.onclick = function () {
    left_time -= 60 * 1;
    count_down_from -= 60 * 1;
    if (count_down_from <= 0) {
        count_down_from = 1;
    }
    if (left_time <= 0) {
        left_time = 1;
    }
    show();
}
dec10sec.onclick = function () {
    left_time -= 10;
    count_down_from -= 10;
    if (count_down_from <= 0) {
        count_down_from = 1;
    }
    if (left_time <= 0) {
        left_time = 1;
    }
    show();
}

dec1sec.onclick = function () {
    left_time -= 1;
    count_down_from -= 1;
    if (count_down_from <= 0) {
        count_down_from = 1;
    }
    if (left_time <= 0) {
        left_time = 1;
    }
    show();
}