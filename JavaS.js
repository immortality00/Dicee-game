

function random() {
  var randomNo1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImg = "images/dice" + randomNo1 + ".png";
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", randomDiceImg);
  var randomNo2 = Math.floor(Math.random() * 6 ) + 1 ;
  var randomDicImg2 = "images/dice" + randomNo2 + ".png";
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", randomDicImg2);
  changeText(randomNo1, randomNo2);
  document.querySelector("button").innerHTML = "Roll Again!";
}

function changeText (no1, no2) {
  var text = document.querySelector("h5")
  if (no1 > no2) {
    text.innerHTML = "Player 1 wins";
  } else if (no1 < no2 ) {
    text.innerHTML = "Player 2 wins";
  } else if (no1 === no2 ) {
    text.innerHTML = "it's a draw";
  }
}

