let x;
// BASIC TYPES
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let y = 'string';
let ids = [1, 2, 33, 4, 6];
ids.push(1);
let arr = [true, 'string', 1];
// TUPLE
let person;
person = [1, 'sex', true];
// AN ARRAY OF TUPLES
let employee;
employee = [
    [1, 'JOHN'],
    [2, 'BEN'],
    [3, 'DAN'],
];
// UNION - make a variable hold more than 1 type
x = employee;
console.log('output: ', x);
export {};
