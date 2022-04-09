
const start_stop = document.querySelector("#start_stop");
const time = document.querySelector("#time");

let count_down = null, count_down_from = 10;
let left_time = count_down_from;

function timer() {
    left_time -= 1;
    time.innerHTML = left_time;
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
        time.innerHTML = left_time;
        count_down = setInterval(timer, 1000);
        start_stop.innerHTML = "STUDY";
    }else{
        start_stop.innerHTML = "START";   
    }
}
