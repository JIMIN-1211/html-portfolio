var numberOfButtons = document.querySelectorAll(".drum");
var audio;
for (var i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    });
}


document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key)
})

//   if (i === 0) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/tom-1.mp3");
//         audio.play();
//       });
//   } else if (i === 1) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/tom-2.mp3");
//         audio.play();
//       });
//   } else if (i === 2) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/tom-3.mp3");
//         audio.play();
//       });
//   } else if (i === 3) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/tom-4.mp3");
//         audio.play();
//       });
//   } else if (i === 4) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/snare.mp3");
//         audio.play();
//       });
//   } else if (i === 5) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/crash.mp3");
//         audio.play();
//       });
//   } else if (i === 6) {
//     document
//       .querySelectorAll(".drum")
//       [i].addEventListener("click", function () {
//         audio = new Audio("./sounds/kick-bass.mp3");
//         audio.play();
//       });
//   }



function makeSound (key) {
    switch (key) {
        case 'w' :
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a' :
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 's' :
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'd' :
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case 'j' :
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'k' :
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'l' :
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    }, 300);
}