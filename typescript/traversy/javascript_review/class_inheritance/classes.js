// PARENT CLASS
class Shape {
  // a constructor function only becomes a constructor function only when its called with the "new" keyword
  constructor(name) {
    this.name = name;
  }

  logName() {
    console.log('Shape Name: ' + this.name);
  }
}

// SUB CLASS # 1
class Rectangle extends Shape {
  // whenever you extend a class you must call in "super()" and pass in the whatever properties it needs
  constructor(name, width, height) {
    super(name); // calls the constructor of the parent class : we pass in the incoming name parameter because the parent needs it.

    this.width = width;
    this.height = height;
  }
}

// SUB CLASS # 2
class Circle extends Shape {
  // whenever you extend a class you must call in "super()" and pass in the whatever properties it needs
  constructor(name, radius) {
    super(name); // calls the constructor of the parent class : we pass in the incoming name parameter because the parent needs it.

    this.radius = radius;
  }

  logName() {
    console.log('Circle Name: ' + this.name);
  }
}

const rect = new Rectangle('Rectangle 1', 20, 30);
rect.logName();
console.log(rect);

const cir = new Circle('Circle 1', 30);
cir.logName();
console.log(cir);
