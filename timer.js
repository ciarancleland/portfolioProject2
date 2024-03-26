function startTimer () {
    let count = 0;
    const timerElement = document.getElementById('timer');

    setInterval(function(){
        count++;
        timerElement.innerHTML = count
    }, 1000)
}

window.onload = startTimer;