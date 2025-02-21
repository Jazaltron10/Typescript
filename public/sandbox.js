let character = 'mario';
let age = 30;
let jump = 50;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
let names = ['Trevor', 'Michael', 'Franklin'];
names.push('toad');
// names.push(3);
// names[0] = 3;
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
numbers.push(25);
console.log(numbers);
// numbers.push('shaun');
// numbers[1]='shaun';
let mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push('sryu');
mixed.push(10);
mixed[0] = 3;
//objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//ninja.age = "30";
//ninja.skills = ['fighting', "sneaking"];
ninja = {
    name: "koshui",
    belt: 'orange',
    age: 40
};
let message = " hello  there i am the greatest super hero on the planet";
console.log(message);
let message_2 = "John walker is a piece of shit";
console.log(message_2.toUpperCase());
// explicit types
let caracter;
let years;
let isloggedin;
years = +'39';
isloggedin = true;
// arrays 
//let samurais: string[];
/*in order to use the push method in an array in typescript you would
have to initialize the array as an empty array*/
let samurais = [];
samurais.push('john');
// union types             
/*A union type array is an array that can contain multiple data types*/
/*when an array or variable is declared and it could be one of several different types it is known as a union type.*/
let dynamic = [];
dynamic.push('hello');
dynamic.push(35);
dynamic.push(true);
console.log(dynamic);
let dui;
dui = '134';
dui = 342;
// objects
let ninjaone;
ninjaone = { name: 'yoshin', age: 34 };
let ninjatwo;
ninjatwo = { name: 'Godzilla', age: 25, beltcolor: 'black' };
ninjatwo.Games = [];
ninjatwo.Games.push("Fifa 20");
console.log(ninjatwo);
ninjatwo.Games.push("Mortal Kombat 11");
console.log(ninjatwo);
ninjatwo.Games.push("Spiderman");
console.log(ninjatwo);
ninjatwo.Games.push("God Of War");
console.log(ninjatwo);
ninjatwo.Games.push("The Last Of Us");
console.log(ninjatwo);
ninjatwo.Games.push(11 + 9);
console.log(ninjatwo);
// Dynamic Types 
let sage = 25;
sage = true;
console.log(sage);
sage = 'hello';
console.log(sage);
sage = { name: "luigi" };
console.log(sage);
/* This basically defeats the purpose of using typescript as it reverts it back to vanilla javascript*/
let mixedArray = [];
mixedArray.push('mario');
mixedArray.push(34);
mixedArray.push(false);
console.log(mixedArray);
/* Note when declaring an object type or an array type you have to use the colon instead of the = sign, this is because we are not initializing the object*/
let ninjaThree;
ninjaThree = { name: 'john', age: 87 };
console.log(ninjaThree);
ninjaThree = { name: 87, age: 'john' };
console.log(ninjaThree);
//FUNCTIONS
let greet;
//greet = "john"
greet = () => {
    console.log("Hello world again");
};
/*
The Question mark makes calling the parameter optional when calling it in the function, likewise you can also give
it a default value by equating it to that value. Note it is not advisable to use both the question mark and
default value together you have to choose between either
*/
/*
Also the optional or general parameters usually go at the end of the function in which it is being passed into

const add = (a: number, b: number, c: number|string = 10) => {} == default value

const add = (a: number, b: number, c?: number|string) => {} == optional parameter
*/
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "20");
/*We can explicitly define the return type of a function by adding a colon and specifying the return type after the parameter brackets
Likewise a function in typescript returns void in typescript when we don't actually return anything
but there's usually no need to do all this as typescript already infers the return type of any given function*/
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetings = (user) => {
    console.log(`${user.name} says hello and has a uid of ${user.uid}`);
};
const greetingsAgain = (user) => {
    console.log(`${user.name} says hello and has a uid of ${user.uid}`);
};
//Function Signatures 
/* A Function signature generally describes the general structure of the function what arguments it takes in and what type of data it returns*/
let greets;
// example 1
let gree;
gree = (name, greetings) => {
    console.log(` ${name} says ${greetings} `);
};
gree("james", "aloha");
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
result = calc(2, 3, "add");
console.log(result);
// example 3
let loginDetails;
loginDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
loginDetails({ name: "john", age: 52 });
// The DOM Typecasting
const anchor = document.querySelector('a');
/* The exclammation mark tells typescript that we know what the return value would be and it would not be null */
if (anchor) {
    console.log(anchor.href);
}
/*Typescript does not have a direct access to the html page during development */
console.log(anchor.href);
/*
Typescript contains special types for every DOM Element
So when we use a particular DOM ELement typescript knows all the different types of properties on that element and provides it to us in vscode with intellisense
*/
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
/* Typecasting  is used to tell typescript the type of an element being used in the DOM*/
//console.log(form.children);
// Grabbing the different Inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, +amount.value);
});
//Classes
/*A class is basically a blueprint for an object */
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
//console.log(invOne, invTwo)
// Here only objects created using this invoice class can be added to this array
let invoices = []; // this single line here makes sure that the array invoices is of the type invoice(which is a class).
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// whenever we create a new object by default all of the properties of that class are public and therefore can be changed by anyone
invOne.client = 'yoshi';
invTwo.amount = 590;
console.log(invoices);
console.log(invOne, invTwo);
//console.log(invOne, invTwo)
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
/*The interface is not used to create new objects like a class but rather to enforce a certain structure on how objects created should look and feel like
The names of parameters do not really matter, this is because a parameter is just a placeholder or an empty variable waiting to be passed in an argument */
const me = {
    name: "jane",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
console.log(me);
//let someone: Isperson;
//<!-- Implementation of interfaces with Objects  -->
//import { Invoice } from './Classes/Invoice.js';
import { Payment } from './Classes/Payments.js';
let docOne;
let docTwo;
/*docOne and docTwo can both be an invoice and a payment respectively because both the invoice and payments class implements the HasFormatter
interface */
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing wok', 200);
/*Now we are saying that only objects which implement the HasFormatter interface can go into the array */
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
