// a constructor function only becomes a constructor function only when its called with the "new" keyword
function Shape(name) {
  this.name = name;
}

// PROTOTYPICAL INHERITANCE ON Shape()
Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};

function Rectangle(name, height, width) {
  // INHERITANCE: inherit Shape function
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}

function Circle(name, radius) {
  // INHERITANCE: inherit Shape function
  Shape.call(this, name);

  this.radius = radius;
}

// ASSIGN THE SHAPE PROTOTYPE USING OBJECT.CREATE to the Circle.prototype
Circle.prototype = Object.create(Shape.prototype);
Rectangle.prototype = Object.create(Shape.prototype);

// CHANGE THE RECTANGLE NAME INSTEAD OF SHAPE NAME.. POLOMORPHISM: same method that does 2 different things
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};

// SET PROTOTYPE CONSTRUCTORS
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 30);
rect.logName();
console.log(rect);

const circle = new Circle('Circle-y', 20);
circle.logName();
console.log(circle);
