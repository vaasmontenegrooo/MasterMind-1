window.addEventListener("load", function () {
    buttonEasy = document.getElementById("easy");
    buttonEasy.addEventListener("click", easy);
    buttonNormal = document.getElementById("normal");
    buttonNormal.addEventListener("click", normal);
    buttonHard = document.getElementById("hard");
    buttonHard.addEventListener("click", hard);
    normal();
});

function getButtons(){
    buttonEasy = document.getElementById("easy");
    buttonNormal = document.getElementById("normal");
    buttonHard = document.getElementById("hard");
}

function easy() {
    config.numberColors = 4;
    config.time = 40;
    getButtons();
    buttonEasy.className = "ui-btn ui-corner-all difficultybuttonactive";
    buttonNormal.className = "ui-btn ui-corner-all difficultybutton";
    buttonHard.className = "ui-btn ui-corner-all difficultybutton";
}

function normal() {
    config.numberColors = 5;
    config.time = 30;
    getButtons();
    buttonEasy.className = "ui-btn ui-corner-all difficultybutton";
    buttonNormal.className = "ui-btn ui-corner-all difficultybuttonactive";
    buttonHard.className = "ui-btn ui-corner-all difficultybutton";
}

function hard() {
    config.numberColors = 6;
    config.time = 20;
    getButtons();
    buttonEasy.className = "ui-btn ui-corner-all difficultybutton";
    buttonNormal.className = "ui-btn ui-corner-all difficultybutton";
    buttonHard.className = "ui-btn ui-corner-all difficultybuttonactive";
}

