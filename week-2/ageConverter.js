function ageConverter(years){
  return years * 365;
}

let userAge = prompt("This program converts your age to days.\nType in your age:");
userAge = Number(userAge);

let message = userAge + " years is " + ageConverter(userAge) + " days.";
alert(message);