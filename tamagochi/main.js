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

function lifeTime() {
    let time = 0;
    life = setInterval(() => {
        time++;
        document.getElementById("valueTime").innerHTML = time + ' sec.';
    }, 1000);
}

function stop() {
    clearInterval(timerId);
    alert("Game over!");
    clearInterval(life);
    document.getElementById("restart").addEventListener('click', function() {
        window.location.reload();
    });
}

function start() {
    if (select.selectedIndex === 0) {
        index = 0;
        setStatsEasy();
        startEasy();
        document.getElementById("valuePet").innerHTML = select.value;
        eat(index);
        run(index);
        wash(index);
    } else if (select.selectedIndex === 1) {
        index = 1;
        setStatsHard();
        startHard();
        document.getElementById("valuePet").innerHTML = select.value;
        eat(index);
        run(index);
        wash(index);
    }
    lifeTime()
}

function eat() {
    if (index === 0) {
        if (food <= 70) {
            food = food + 30;
        } else {
            food = 100;
        }
    } else if (index === 1) {
        if (food <= 40) {
            food = food + 30;
        } else {
            food = 70;
        }
    }
    clean = clean - 20;
    document.getElementById("valueFood").innerHTML = food;
    document.getElementById("valueClean").innerHTML = clean;
}

function wash() {
    if (index === 0) {
        if (clean <= 60) {
            clean = clean + 40;
        } else {
            clean = 100;
        }
    } else if (index === 1) {
        if (clean <= 30) {
            clean = clean + 40;
        } else {
            clean = 70;
        }
    }
    happiness = happiness - 20;
    document.getElementById("valueClean").innerHTML = clean;
    document.getElementById("valueHappiness").innerHTML = happiness;
}

function run() {
    if (index === 0) {
        if (happiness <= 70) {
            happiness = happiness + 30;
        } else {
            happiness = 100;
        }
    } else if (index === 1) {
        if (happiness <= 40) {
            happiness = happiness + 30;
        } else {
            happiness = 70;
        }
    }
    food =food - 10;
    document.getElementById("valueHappiness").innerHTML = happiness;
    document.getElementById("valueFood").innerHTML = food;
}