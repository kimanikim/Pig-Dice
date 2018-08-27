var dice = {
  sides: 6,
  roll: function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
};

$(document).ready(function() {
  //Player 1
  var dice1 = 0;
  var summation1 = 0;
  var total1 = 0;
  $("#hold2").attr("disabled", true);
  $("#roll2").attr("disabled", true);

  $("#roll1").click(function() {
    dice1 = dice.roll();
    if (dice1 === 1) {
      dice1 = 0;
      summation1 = 0;
      $("#hold1").attr("disabled", true);
      $("#roll1").attr("disabled", true);

      $("#hold2").attr("disabled", false);
      $("#roll2").attr("disabled", false);
      alert("Dice has landed on a 1,turn goes to next player");
    }
    $("#dice1").text(dice1);

    summation1 += dice1;
    $("#summation1").text(summation1);
  });

  $("#hold1").click(function() {
    total1 += summation1;

    $("#total1").text(total1);
    if (total1 >= 100) {
      alert("Player 1 Has Won!");
    } else {
      dice1 = 0;
      summation1 = 0;
      $("#dice1").text(dice1);
      $("#summation1").text(summation1);

      $("#roll1").attr("disabled", true);
      $("#hold1").attr("disabled", true);

      $("#roll2").attr("disabled", false);
      $("#hold2").attr("disabled", false);
      alert("Next Players Turn");
    }
  });

  //Player 2
  var dice2 = 0;
  var summation2 = 0;
  var total2 = 0;

  $("#roll2").click(function() {
    dice2 = dice.roll();
    if (dice2 === 1) {
      dice2 = 0;
      summation2 = 0;
      $("#hold2").attr("disabled", true);
      $("#roll2").attr("disabled", true);

      $("#hold1").attr("disabled", false);
      $("#roll1").attr("disabled", false);

      alert("Dice has landed on a 1,turn goes to next player");
    }
    $("#dice2").text(dice2);

    summation2 += dice2;
    $("#summation2").text(summation2);
  });

  $("#hold2").click(function() {
    total2 += summation2;

    $("#total2").text(total2);
    if (total2 >= 100) {
      alert("Player 1 Has Won!");
    } else {
      dice2 = 0;
      summation2 = 0;
      $("#dice2").text(dice2);
      $("#summation2").text(summation2);

      $("#roll2").attr("disabled", true);
      $("#hold2").attr("disabled", true);

      $("#roll1").attr("disabled", false);
      $("#hold1").attr("disabled", false);
      alert("Next Players Turn");
    }
  });
});
