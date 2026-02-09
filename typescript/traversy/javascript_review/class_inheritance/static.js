class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  static welcome() {
    console.log('Backlash!!! isa laban sa lahat!!');
  }
}

const rect = new Rectangle('Rectangle', 20, 10);
console.log(rect.area());
// Calling static methods : you call from the Class name itself and not the instance
Rectangle.welcome();
