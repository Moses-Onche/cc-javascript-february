const person = {
  fname: "John",
  lname: "Doe",
  age: 25
};

console.log(person)

// let txt = "";
// for (let x in person){
//   txt = txt + person[x] + " ";
// }

// console.log(txt)

person.nationality = 'Nigerian';

console.log(person);

delete person.nationality;

console.log(person);