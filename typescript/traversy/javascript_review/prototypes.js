// Constructor function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  // this.area = () => {
  //   return this.width * this.height;
  // };
}

// Prototype: Special Object that you can assign properties to
// Arrow functions: () => {}
// ❌ Cannot be used as constructors
// ❌ No prototype
// ADDING PROTOTYPES TO AN OBJECT
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

// instatiate the constructor function
const rect = new Rectangle('Rect 1', 10, 20);
const rect2 = new Rectangle('Rect 2', 30, 60);

console.log(rect.area());
console.log(rect.changeName('etits'));
console.log(rect.perimeter());
console.log(rect.isSquare());
console.log(rect);

console.log(rect2.area());
console.log(rect2.changeName('etits 2'));
console.log(rect2.perimeter());
console.log(rect2.isSquare());
console.log(rect2);
