let clock = document.querySelector("#clock");

function makeClock() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    clock.innerHTML = 
    String(hour).padStart(2, "0") + " : " + 
    String(min).padStart(2, "0") + " : " + 
    String(sec).padStart(2, "0");   
}

setInterval(makeClock, 1000);