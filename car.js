let Car;
let prius;
//LOOOOL VANKTA 160km/h
Car = function(b, m, y) {
  this.brand = b;
  this.model = m;
  this.year = y;
};
//KOKO BOSS
//VANKATA NO CAR

Car.prototype.rent = function() {
  console.log("You've just rent a " + this.model + ".");
};
//RIP VANKATA CAR
prius = new Car("Toyota", "Prius", "2012");

console.log("gui" + prius);
