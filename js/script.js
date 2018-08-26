// function rollDice() {
//   var die1 = document.getElementById("die1");
//   var die2 = document.getElementById("die2");
//   var status = document.getElementById("status");
//   var d1 = Math.floor(Math.random() * 6) + 1;
//   var d2 = Math.floor(Math.random() * 6) + 1;
//   var diceTotal = d1 + d2;
//   die1.innerHTML = d1;
//   die2.innerHTML = d2;
//   status.innerHTML = "You have rolled " + diceTotal + ".";
//   if (d1 == d2) {
//     status.innerHTML += " Hoooooooray! You got a doouble you get a free turn!!";
//   }
// }

// function rollDice() {
//   document.getElementById("die1").innerHTML = Math.floor(Math.random() * 6 + 1);
//   document.getElementById("die2").innerHTML = Math.floor(Math.random() * 6 + 1);
// }

function rollDice(el) {
  el.innerHTML = Math.floor(Math.random() * 6 + 1);
}
