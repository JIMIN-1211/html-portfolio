const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keypress(function() {
    if(!started) {
        $("h1").text("Level "+level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function (){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    console.log(userClickedPattern);

    playSound(userChosenColour)
    animatePress(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
}) 

function nextSequence(){
    userClickedPattern=[];

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    
    level++;
    $("h1").text("Level "+level);
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

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            }, 1000);
        }
    }else{
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("h1").text("Game Over, Press Any Key to Restart");
            playSound("wrong");
            $("body").removeClass("game-over");
        }, 200)
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    setTimeout(()=>{
       started = false; 
    }, 200);
    
}