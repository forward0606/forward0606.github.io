
const start_stop = document.querySelector("#start_stop");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

let count_down = null, count_down_from = parseInt(minute.innerHTML, 10) * 60 + parseInt(second.innerHTML, 10);
let left_time = count_down_from;

function timer() {
    left_time -= 1;
    let tmp = Math.floor(left_time / 60);
    minute.innerHTML = (tmp < 10 ? '0' + tmp : tmp);
    second.innerHTML = (left_time % 60 < 10 ? '0' + left_time % 60 : left_time % 60);
    if (left_time == 0) {
        clearInterval(count_down);
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
        let tmp = Math.floor(left_time / 60);
        minute.innerHTML = (tmp < 10 ? '0' + tmp : tmp);
        second.innerHTML = (left_time % 60 < 10 ? '0' + left_time % 60 : left_time % 60);
        count_down = setInterval(timer, 1000);
        start_stop.innerHTML = "STOP";
    } else {
        start_stop.innerHTML = "START";
        clearInterval(count_down);
        count_down = null;
    }
}
