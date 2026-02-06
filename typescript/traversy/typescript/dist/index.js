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
let pid;
pid = '';
// ENUMS: enumerated type. allows us to define a set of named constants
var Diretion1;
(function (Diretion1) {
    Diretion1[Diretion1["FOWARD"] = 1] = "FOWARD";
    Diretion1[Diretion1["BACKWARD"] = 2] = "BACKWARD";
    Diretion1[Diretion1["LEFT"] = 3] = "LEFT";
    Diretion1[Diretion1["RIGHT"] = 4] = "RIGHT";
})(Diretion1 || (Diretion1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["force"] = "good";
    Direction2["darkside"] = "evil";
})(Direction2 || (Direction2 = {}));
// x = Diretion1.FOWARD;
x = Direction2.force;
let state = 'idle';
const user = {
    id: 1,
    name: 'John',
};
x = user.name;
// TYPE ASSERTION
// const user: { id: number; name: string } = {
//   id: 1,
//   name: 'John',
// };
console.log('output: ', x);
export {};
// TYPESCRIPT NAMING CONVENTION
// type User = { id: number };
// interface Product { name: string }
// enum Status { Active, Disabled }
// class Account {}
