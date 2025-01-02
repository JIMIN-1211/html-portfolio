const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
var level = 0;

$("html").one("keydown", nextSequence);

$(".btn").click(function (){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    playSound(userChosenColour)
    animatePress(userChosenColour);
    // console.log($(this).attr("id"));
    nextSequence();
}) 

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    setTimeout(()=>{
      for(var i=0; i<gamePattern.length; i++){
            $("#"+gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(gamePattern[i]);
        }  
    }, 100);
    
    
    $("h1").text("Level "+level);
    level++;
}

function playSound(name) {
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(()=>{
        $("#"+currentColour).removeClass("pressed");
    },100);
}