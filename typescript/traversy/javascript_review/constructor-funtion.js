let x;

// OBJECT LITERALS
const rectangle1 = {
  name: 'rectangle',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

const rectangle2 = {
  name: 'rectangle',
  width: 20,
  height: 10,
  area: function () {
    return this.width * this.height;
  },
};

// BLUEPRINT : constructor functions "new" initializing a constructor = convention UpperCase
// CONSTRUCTOR FUNCTION
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

// CREATE MULTIPLE OBJECTS FROM A SINGLE BLUE PRINT
// INSTANTIATE THE CONSTRUCTOR FUNTION
const rect1 = new Rectangle('Rectangle 1', 20, 10);
const rect2 = new Rectangle('Rectangle 2', 10, 10);

// Object Literals are limited to just one copy
console.log(
  rect1.name,
  rect1.height,
  rect1.width,
  rect1.area(),
  rect2.name,
  rect2.height,
  rect2.width,
  rect2.area(),
);
