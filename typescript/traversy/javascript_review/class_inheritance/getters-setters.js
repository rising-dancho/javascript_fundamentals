class Person {
  constructor(firstName, lastName) {
    // the properties _firstName and _lastName inside this contructor together with the local variables firstName and lastName only exist inside the constructor and only when its running
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // GETTERS AND SETTERS LIVE IN THE PROTOTYPE and NOT in the constructor instance
  // GET: getter is just a method.. declared like a method but used like a property
  get firstName() {
    return this.capitalizeInitial(this._firstName);
  }

  // SETTER: setter => always gonna take in a single value that you want it to be set to
  set firstName(value) {
    this._firstName = this.capitalizeInitial(value); // inside setter accessing outside methods require this keyword
  }

  // within a class remember that get and set methods needs to use this
  get lastName() {
    return this.capitalizeInitial(this._lastName);
  }

  // setter : used for setting a property of the constructor to a different one
  set lastName(value) {
    this._lastName = this.capitalizeInitial(value);
  }

  // fullname
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  capitalizeInitial(value) {
    return value.charAt(0).toUpperCase() + value.slice(1); // always remember to use return keyword when working with methods
  }
}

const person1 = new Person('john', 'doe');

// call the setter of the class
person1.firstName = 'ben';
person1.lastName = 'ten';
console.log(person1.firstName);
console.log(person1.lastName);

console.log(person1.fullName); // getters arent called like a function. its called like a property


// So when JS sees:

// this.firstName
// It performs property lookup:
// Does the object itself have firstName?

// ❌ No
// Check the prototype
// ✅ Getter found → CALL IT

// https://chatgpt.com/share/698a49db-6434-8000-81e5-dec39652665f


// =======================================================

// 5️⃣ What this.firstName REALLY means

// This line:
// this.firstName


// does NOT mean:
// “use the constructor parameter named firstName”

// It means:
// “look up a property called firstName on this object”

// JS doesn’t care where that property came from:
// data property
// getter
// prototype