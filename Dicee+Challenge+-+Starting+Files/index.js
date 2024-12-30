var randomNumber1 = Math.round(Math.random()*5)+1;
var randomNumber2 = Math.round(Math.random()*5)+1;
var randomdice1 = "./images/dice"+randomNumber1+".png";
var randomdice2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", randomdice1);
document.querySelector(".img2").setAttribute("src", randomdice2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerText = "Draw!";
}else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "player 1 wins! 🚩";
}else {
    document.querySelector("h1").innerText = "player 2 wins! 🚩"
}
console.log(resultComment);