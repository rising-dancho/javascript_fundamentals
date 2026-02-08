function Player(name, lvl = 1, points = 0) {
  this.name = name;
  this.lvl = lvl;
  this.points = points;
}

Player.prototype.gainXp = function (num) {
  if (num >= 1 && num <= 10) {
    this.points += num;
    if (this.points >= 10) {
      this.lvl += 1;
      this.points -= 10;
    }
    console.log(this.describe())
  }
};

Player.prototype.describe = function () {
  return `
    ${this.name} is level ${this.lvl} with ${this.points} experience points
    `;
};

const p1 = new Player('Ben');
p1.gainXp(10);
p1.gainXp(8);
p1.gainXp(10);
// console.log(p1.describe());
