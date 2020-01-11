const output = document.querySelector("#display"),
      zero = document.querySelector("#btn0"),
      one = document.querySelector("#btn1"),
      two = document.querySelector("#btn2"),
      three = document.querySelector("#btn3"),
      four = document.querySelector("#btn4"),
      five = document.querySelector("#btn5"),
      six = document.querySelector("#btn6"),
      seven = document.querySelector("#btn7"),
      eight = document.querySelector("#btn8"),
      nine = document.querySelector("#btn9");

      clear = document.querySelector("#btnClear");

function showNumber(e) {

  var item = e.target.textContent;
  output.textContent += item;

}

zero.addEventListener("click", showNumber, false);
one.addEventListener("click", showNumber, false);
two.addEventListener("click", showNumber, false);
three.addEventListener("click", showNumber, false);
four.addEventListener("click", showNumber, false);
five.addEventListener("click", showNumber, false);
six.addEventListener("click", showNumber, false);
seven.addEventListener("click", showNumber, false);
eight.addEventListener("click", showNumber, false);
nine.addEventListener("click", showNumber, false);

clear.addEventListener("click", function clear() {

  output.textContent = "";

}, false);
