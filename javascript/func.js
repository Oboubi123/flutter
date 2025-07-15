//Functions declaration
function sayHello(){
    console.log("Hello!");
}
sayHello();

// parameters
function greet(name){
    console.log("Hello, " + name + "!")
}
greet("Eric");
//Return statement
function add(a,b){
    return a +b;
}
let result = add(3,5)
console.log(result)
//Fuction expression
let multiply = function(a,b){
    return a*b;
}
let results = multiply(4,6);
console.log(results);
//arrow function
let square = (num) => num * num 
let answer = square(5)
console.log(answer)