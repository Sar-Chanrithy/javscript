let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 1. length

let fruits1 = ["Apple", "Banana", "Orange"];

console.log(fruits1.length);


// 2. edit values

fruits[1] = "Mango";

console.log(fruits);

// 3. push()

let fruits2 = ["Apple", "Banana"];

fruits2.push("Mango");

console.log(fruits2);

// 4. pop()

let fruits3 = ["Apple", "Banana", "Orange"];

fruits3.pop();

console.log(fruits3);

// 5. unshift()

let fruits4 = ["Apple", "Banana", "Orange"];

fruits4.unshift("Apple");

console.log(fruits4);

// 6. shift()

let fruits5 = ["Apple", "Banana", "Orange"];

fruits5.shift();

console.log(fruits5);

// 7. loop array

let fruits6 = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits6.length; i++) {
    console.log(fruits6[i]);
}

// for of

let fruits7 = ["Mango", "Banana", "Orange"];

for (let fruit7 of fruits7) {
    console.log(fruit7);
}

// 8. forEach()

let fruits8 = ["Grape", "Banana", "Orange"];

fruits8.forEach(function(fruit) {
    console.log(fruit);
});

// 9. include()

let fruits9 = ["Apple", "Banana", "Orange"];

console.log(fruits9.includes("Banana"));

// 10. indexOf()

console.log(fruits9.indexOf("Banana"));

// 11. array of objects

let students = [
    {name: "Rithy", age: 20},
    {name: "Dara", age: 21}
];

console.log(students[0].name);
console.log(students[1].age);