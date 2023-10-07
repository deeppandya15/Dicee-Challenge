// For Player 1
var randomNumber = Math.floor(Math.random()*6)+1; //1-6

var ranomDiceImageName="images/dice"+randomNumber+".png"; //src=images/dice1-dice6.png

document.getElementById("img1").setAttribute("src", ranomDiceImageName);


// For Player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var ranomDiceImageName2="images/dice"+randomNumber2+".png";

document.getElementById("img2").setAttribute("src", ranomDiceImageName2);


if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}