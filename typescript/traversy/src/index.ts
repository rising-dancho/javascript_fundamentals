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


x = employee;

console.log('output: ', x);
