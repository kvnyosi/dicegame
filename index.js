function randomNumber1() {
  var ran = Math.floor(Math.random() * 6) + 1;
  return ran;
}

var dadu1 = randomNumber1();
var dadu2 = randomNumber1();

document.querySelector("img").setAttribute("src" , "images/dice"+dadu1+".png");
document.querySelectorAll("img")[1].setAttribute("src" , "images/dice"+dadu2+".png");

if (dadu1 < dadu2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else if (dadu1 === dadu2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
