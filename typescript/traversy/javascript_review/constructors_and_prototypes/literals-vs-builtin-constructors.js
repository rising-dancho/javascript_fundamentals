const strLit = 'Hello';
const strObj = new String('Hello'); // other examples are: Number(), Boolean(), Array(), Function(), Object()

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// BOXING: turns the literal into and object
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// UNBOXING: turns the object into a literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

// CONSTRUCTOR PROPERTY ON A LITERAL beause of BOXING
console.log(strLit.constructor);
console.log(strObj.constructor);

// instanceOf operator to check if its an instance of a constructor function
console.log(strLit instanceof String); // false : coz its a string literal
console.log(strObj instanceof String); // true : coz its from a constructor function
