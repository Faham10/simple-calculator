// console.log("hyyyyyyyy");
// console.log("ffffyyyy");


// fullname = "syed faham hussain";
// console.log(fullname);

// age = 234
// console.log(age);


// Fullname = "faham";
// console.log(Fullname);


// console.log("hello worls");

// const student = {
//     name:"faham",
//     age : 16,
//     marks : 100,
// }
// student["age"] = student["age"] +3;

// console.log(student["age"]);
//  studnt.age = studnt.age +2
// studnt.name = "SYED";
// console.log(studnt.age);
// console.log(studnt.name);
/* 
const instagram = {
    Name:"ball pen",
    price:120,
    rating:7.88,
    ofer:7,
};
console.log(instagram); */
/* 
let a = 5;
let b = 5;

 let c = a + b; 
 let v = a - b; 
 let x = a / b; 
 
console.log("a = " , a , " & b = ",b)
console.log("a + b =",c);
console.log("a - b =", v);
console.log("a * b =", a * b);
console.log("a / b =",x);

console.log("a / b =",x); */

/* console.log("a + b =", a + b); */

/* 
let a = 5;
let b = 5;

console.log("a = ",a, "& b = ",b);

console.log("++a =",++a);
console.log("a=",a);

console.log("b-- =",b--);
console.log("b =",b); */

/* 
let a = 5;
let b = 5;

console.log("a = ",a, "& b = ",b);
a+=1; //6
console.log(a);
 
a-=1; //6
console.log(a);

 */
/* 
 let age = 16;

 if (age >= 17){

    console.log("You can vote");
 }

 
 if (age < 18){

    console.log("You can not vote");
 } */

/* 
let num =100;
let a;


if(num%2 === 0){
    console.log("enter your number",a);
    console.log("Number Is Even");
}else{
    console.log("Number Is Odd");
} */

// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);