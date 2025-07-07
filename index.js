document.addEventListener("keydown", function(event){
    playSound(event.key);
    clicked(event.key);
})

var listOfDrums = document.querySelectorAll(".drum");

for (var i=0; i < listOfDrums.length; i++) {
    listOfDrums[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    clicked(this.innerHTML);
    })
    
}


function playSound(key) {
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "f":
            var audio5 = new Audio("sounds/hihat.mp3");
            audio5.play();
            break;
        case "g":
            var audio6 = new Audio("sounds/snare2.mp3");
            audio6.play();
            break;
        case "h":
            var audio7 = new Audio("sounds/cymbal.mp3");
            audio7.play();
            break;
        case "j":
            var audio8 = new Audio("sounds/cymbal2.mp3");
            audio8.play();
            break;
        case "k":
            var audio9 = new Audio("sounds/kick-bass.mp3");
            audio9.play();
            break;
        case "l":
            var audio10 = new Audio("sounds/snare.mp3");
            audio10.play();
            break;
        case " ":
            playSong();
            break;
        default:
            break;
    }
}

function clicked(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

function playSong() {
    setTimeout(() => {
        new Audio("sounds/kick-bass.mp3").play();
        clicked("k");
    }, 0);

    setTimeout(() => {
        new Audio("sounds/cymbal2.mp3").play();
        clicked("j");
    }, 0);

    setTimeout(() => {
        new Audio("sounds/hihat.mp3").play();
        clicked("f");
    }, 400);

    setTimeout(() => {
        new Audio("sounds/kick-bass.mp3").play();
        clicked("k");
    }, 700);

    setTimeout(() => {
        new Audio("sounds/hihat.mp3").play();
        clicked("f");
    }, 800);

    setTimeout(() => {
        new Audio("sounds/snare.mp3").play();
        clicked("l");
    }, 800);

    setTimeout(() => {
        new Audio("sounds/kick-bass.mp3").play();
        clicked("k");
    }, 1200);

    setTimeout(() => {
        new Audio("sounds/hihat.mp3").play();
        clicked("f");
    }, 1200);

    setTimeout(() => {
        new Audio("sounds/kick-bass.mp3").play();
        clicked("k");
    }, 1600);

    setTimeout(() => {
        new Audio("sounds/hihat.mp3").play();
        clicked("f");
    }, 1600);

    setTimeout(() => {
        new Audio("sounds/kick-bass.mp3").play();
        clicked("k");
    }, 2000);

    setTimeout(() => {
        new Audio("sounds/cymbal.mp3").play();
        clicked("h");
    }, 2400);

    setTimeout(() => {
        new Audio("sounds/snare.mp3").play();
        clicked("l");
    }, 2400);

    setTimeout(() => {
        new Audio("sounds/snare2.mp3").play();
        clicked("g");
    }, 2400);
}

document.querySelector(".play").addEventListener("click", function() {
    playSong();
    clicked("play"); // simulate press
});