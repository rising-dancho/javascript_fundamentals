// constructor function
function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Rectangle 1', 20, 10);
const rect2 = new Rectangle('Rectangle 2', 10, 30);

console.log(rect1.name, rect1.width, rect1.height, rect1.area());
console.log(rect2.name, rect2.width, rect2.height, rect2.area());
console.log(rect1['width']); // different way to acccess properties

// add property
console.log((rect1.color = 'red'));

// you can add to the constructor function on the fly
rect2.perimeter = () => 2 * (rect2.width + rect2.height);

// delete property
delete rect1.name;

console.log(rect2, rect2.perimeter());
console.log(rect1);

// Check for specific property
console.log(rect2.hasOwnProperty('area'));

// Get Keys : Objects
console.log(Object.keys(rect1));

// Get Values : Objects
console.log(Object.values(rect2));

// Get Entries: key value pairs
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  // console.log(typeof value);
  // filter out the function
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}
