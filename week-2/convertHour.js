function convertHour(hour){
  return hour * 3600;
}

let input = prompt("Type in a number.");
input = Number(input);
let message = (input + " Hour is " + convertHour(input) + " seconds.");
alert(message);