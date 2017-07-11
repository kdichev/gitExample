var Car ,prius;

Car = function(b, m, y) {
  this.brand = b;
  this.model = m;
  this.year = y;
};

Car.prototype.rent = function() {
  console.log("You've just rent a " + this.model + ".");
};

prius = new Car("Toyota", "Prius", "2012");
