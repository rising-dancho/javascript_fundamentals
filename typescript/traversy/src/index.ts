let x: any;

// BASIC TYPES
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let y: any = 'string';

let ids: number[] = [1, 2, 33, 4, 6];
ids.push(1);

let arr: any = [true, 'string', 1];

// TUPLE
let person: [number, string, boolean];
person = [1, 'sex', true];

// AN ARRAY OF TUPLES
let employee: [number, string][];
employee = [
  [1, 'JOHN'],
  [2, 'BEN'],
  [3, 'DAN'],
];

// UNION - make a variable hold more than 1 type
let pid: string | number;
pid = '';

// ENUMS: enumerated type. allows us to define a set of named constants
enum Diretion1 {
  FOWARD = 1,
  BACKWARD,
  LEFT,
  RIGHT,
}

enum Direction2 {
  force = 'good',
  darkside = 'evil',
}

// x = Diretion1.FOWARD;
x = Direction2.force;

// TYPE : more modern but does the same thing as enums
type State = 'idle' | 'loading' | 'success' | 'error';

let state: State = 'idle';

// x = employee;

// OBJECTS
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'John',
};

x = user.name;

// TYPE ASSERTION
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// customerId = true

// const user: { id: number; name: string } = {
//   id: 1,
//   name: 'John',
// };

// TYPES IN FUNCTIONS


console.log('output: ', x);

// TYPESCRIPT NAMING CONVENTION
// type User = { id: number };
// interface Product { name: string }
// enum Status { Active, Disabled }
// class Account {}
