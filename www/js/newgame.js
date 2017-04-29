window.addEventListener("load", function () {
    buttonNewGame = document.getElementById("newgame");
    buttonNewGame.addEventListener("click", initGame);
});



function randomColor(min, max) {
    var min = parseInt(min, 10);
    var max = parseInt(max, 10);

    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dziala() {
    test = makeRandomColors();
    alert(test);
}

function screenSize() {
    var i;
    var el = document.getElementsByClassName("singlerow");
    for (i = 0; i < el.length; i++) {
        var element = el.item(i);
        element.style.width = window.innerWidth + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singlebox");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    el = document.getElementsByClassName("singleboxscore");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerWidth * 0.2 + 'px';
        element.style.height = window.innerHeight * 0.1 + 'px';
    }
    element = document.getElementById('timer');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    element = document.getElementById('checkbutton');
    element.style.width = window.innerWidth * 0.5 + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    element = document.getElementById('colorbasket');
    element.style.width = window.innerWidth + 'px';
    element.style.height = window.innerHeight * 0.1 + 'px';
    if (sessionStorage.getItem('numbercolors') === '4') {
        element.innerHTML = '<div class="singlecolorbox"><img id="orange" draggable="true" class="ball" src="../www/img/orange.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/blue.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/red.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/green.png"/></div>'
        el = document.getElementsByClassName("singlecolorbox");
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.style.width = window.innerWidth * 0.25 + 'px';
            element.style.height = window.innerHeight * 0.1 + 'px';
        }
        ballSize();
    }
    if (sessionStorage.getItem('numbercolors') === '5') {
        element.innerHTML = '<div class="singlecolorbox"><img id="orange" draggable="true" class="ball" src="../www/img/orange.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/blue.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/red.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/green.png"/></div><div class="singlecolorbox"><img draggable="true" class="ball" src="../www/img/violet.png"/></div>'
        el = document.getElementsByClassName("singlecolorbox");
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.style.width = window.innerWidth * 0.2 + 'px';
            element.style.height = window.innerHeight * 0.1 + 'px';
        }
        ballSize();
    }
    if (sessionStorage.getItem('numbercolors') === '6') {
        element.innerHTML = '<div class="border"></div><div class="singlecolorbox"><img id="orange" class="ball" src="../www/img/orange.png"/></div><div class="singlecolorbox"><img class="ball" src="../www/img/blue.png"/></div><div class="singlecolorbox"><img class="ball" src="../www/img/red.png"/></div><div class="singlecolorbox"><img class="ball" src="../www/img/green.png"/></div><div class="singlecolorbox"><img class="ball" src="../www/img/violet.png"/></div><div class="singlecolorbox"><img class="ball" src="../www/img/yellow.png"/></div><div class="border"></div>'
        el = document.getElementsByClassName("singlecolorbox");
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.style.width = window.innerWidth * 0.16 + 'px';
            element.style.height = window.innerHeight * 0.1 + 'px';
        }
        el = document.getElementsByClassName("border");
        for (i = 0; i < el.length; i++) {
            element = el.item(i);
            element.style.width = window.innerWidth * 0.02 + 'px';
            element.style.height = window.innerHeight * 0.1 + 'px';
        }
        ballSize();
        
    }
}

function ballSize() {
    el = document.getElementsByClassName("ball");
    for (i = 0; i < el.length; i++) {
        element = el.item(i);
        element.style.width = window.innerHeight * 0.08 + 'px';
        element.style.height = window.innerHeight * 0.08 + 'px';
        element.style.marginTop = window.innerHeight * 0.01 + 'px';
        element.style.marginBottom = window.innerHeight * 0.01 + 'px';
    }
}

function makeRandomColors() {
    var availableColors = [1, 2, 3, 4, 5, 6];
    var randomColorsBox = [0, 0, 0, 0];
    var i, p, tmp1, tmp2;
        p = sessionStorage.getItem('numbercolors') - 1;
    for (i = 0; i < 4; i++){
        tmp1 = randomColor(0, p);
        randomColorsBox[i] = availableColors[tmp1];
        tmp2 = availableColors[tmp1];
        availableColors[tmp1] = availableColors[p];
        p = p-1;
    }
    return(randomColorsBox);
}

function getTime() {
    var time, toParse;
    toParse = sessionStorage.getItem('time');
    switch (toParse) {
        case '40':
            time = 40;
            break;
        case '30':
            time = 30;
            break;
        case '20':
            time = 20;
            break;
    }
    return time;
}

function time() {
    var elClock = document.getElementById('clock');
    if (sec>9)
        elClock.textContent = '00 : ' + sec;
    else
        elClock.textContent = '00 : 0' + sec;
    sec = sec - 1;
    setTimeout("time();", 1000);
}

/*function catchBalls() {
    orangeBall = document.getElementById("orange");
    orangeBall.addEventListener(
            'dragstart',
            function (ev) {
                ev.dataTransfer.setData("text/plain", ev.target.id);
                console.log(ev.target.id);
            }
        )
}

function catchCheck() {
    checkButton = document.getElementById("checkbutton");
    checkButton.addEventListener(
        'drop',
        function (ev) {
            ev.preventDefault();
            console.log("drop");
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    )
    checkButton.addEventListener(
        'dragover',
        function (ev) {
            ev.preventDefault();}
            )
}



function catchSingleBox() {
    el = document.getElementsByClassName("singlebox");
    for (i = 0; i < el.length; i++) {
        el.item(i).addEventListener(
        'drop',
        function(ev) {
            ev.preventDefault();
            console.log("drop");
            var data = ev.dataTransfer.getData("text");
            ev.target.appendChild(document.getElementById(data));
        }
    )
        el.item(i).addEventListener(
        'dragover',
        function (ev) {
            ev.preventDefault();}
            )
    }
}*/

function dragdrop() {
    $(".singlecolorbox").draggable({snap: ".singlebox"});
    $(".singlecolorbox").position({at:"center"});
    $(".singlebox").droppable();
    
}



function initGame() {
    
    makeRandomColors();
    screenSize();
    sec = getTime();
    time();

    //catchCheck();
    //catchBalls();
    round = 0;
    dragdrop();
    //catchSingleBox();
}
