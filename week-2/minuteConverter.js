function minuteConverter(minute){
  return minute * 60;
}

let input = prompt("This program converts minutes to seconds.\nType in the time in minutes:")
input = Number(input);

let message = input + " minutes is " + minuteConverter(input) + " seconds.";
alert(message);