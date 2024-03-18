let userInput = prompt("If a number is less than or equal to zero, this program will return true.\n" +
"Otherwise it will return false.\n" + "Type in a number");

userInput = Number(userInput);

function check(number){
  if (number <= 0) {
    return true;
  } else {
    return false;
  }
}

alert(check(userInput));