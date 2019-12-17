function setStatsEasy() {
    const min = 50;
    const max = 100;
    food = Math.floor((Math.random() * (max - min + 1)) + min);
    clean = Math.floor((Math.random() * (max - min + 1)) + min);
    happiness = Math.floor((Math.random() * (max - min + 1)) + min);
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
}

function setStatsHard() {
    const min = 50;
    const max = 70;
    food = Math.floor((Math.random() * (max - min + 1)) + min);
    clean = Math.floor((Math.random() * (max - min + 1)) + min);
    happiness = Math.floor((Math.random() * (max - min + 1)) + min);
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
}

function startEasy() {
    timerId = setInterval(() => {
        food = food - 3;
        clean = clean - 3;
        happiness = happiness - 3;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
        if (food <= 0 || happiness <= 0 || clean <= 0) {
            stop();
        }
    }, 5000);
}

function startHard() {
    timerId = setInterval(() => {
        food = food - 5;
        clean = clean - 5;
        happiness = happiness - 5;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
        if (food <= 0 || happiness <= 0 || clean <= 0) {
            stop();
        }
    }, 5000);  
}

function stop() {
    clearInterval(timerId);
    alert("Game over!");
}

function eat() {
    food = food + 30;
    clean = clean - 20;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
}

function wash() {
    clean = clean + 40;
    happiness = happiness - 20;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
}

function run() {
    happiness = happiness + 15;
    food =food - 10;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueFood").innerHTML = food;
}


easy.addEventListener("click", startEasy);
hard.addEventListener("click", startHard);
