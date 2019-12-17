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

function start() {
    setInterval(() => {
        food = food - 3;
        clean = clean - 3;
        happiness = happiness - 3;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
    }, 5000);
}

function startHard() {
    setInterval(() => {
        food = food - 5;
        clean = clean - 5;
        happiness = happiness - 5;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
    }, 5000);
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

function start() {
    setInterval(() => {
        food = food - 3;
        clean = clean - 3;
        happiness = happiness - 3;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
    }, 5000);
}

function startHard() {
    setInterval(() => {
        food = food - 5;
        clean = clean - 5;
        happiness = happiness - 5;
        document.getElementById("valueFood").innerHTML = food;
        document.getElementById("valueClean").innerHTML = clean;
        document.getElementById("valueHappiness").innerHTML = happiness;
    }, 5000);
}


// class Pet {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Actions extends Pet {
//     constructor(name) {
//         super(name);
//         this.food = food;
//         this.clean = clean;
//         this.happiness = happiness;
//     }

//     eat() {
//         this.food + 30;
//         document.getElementById("valueFood").innerHTML = this.food;
//         this.clean - 20;
//         document.getElementById("valueClean").innerHTML = this.clean;
//     }

//     wash() {
//         this.clean + 40;
//         document.getElementById("valueClean").innerHTML = this.clean;
//         this.happiness - 20;
//         document.getElementById("valueHappiness").innerHTML = this.happiness;
//     }

//     run() {
//         this.happiness + 15;
//         document.getElementById("valueHappiness").innerHTML = this.happiness;
//         this.food - 10;
//         document.getElementById("valueFood").innerHTML = this.food;
//     }
// }
