
function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours()
    let minuts = currentTime.getMinutes()
    let second = currentTime.getSeconds()
    document.querySelector(".hours").innerHTML= hours  
    document.querySelector(".minuts").innerHTML= minuts
    document.querySelector(".seconds").innerHTML= second
}


setInterval(() => {
    updateTime()
}, 1000);