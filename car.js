let Car;
let prius;
//LOOOOL VANKTA 160km/h
Car = (b, m, y) => {
  this.brand = b;
  this.model = m;
  this.year = y;
};
//KOKO BOSS
//VANKATA NO CAR

Car.prototype.rent = () => {
  console.log("You've just rent a " + this.model + ".");
};

Car.prototype.return = () => {
  console.log("You've just returned" + this.model + ".");
};
//RIP VANKATA CAR
prius = new Car("Toyota", "Prius", "2012");
angelaMergel = new Car("Mercedess", "C-Klass", "2009");

console.log("gui" + prius);
console.log("gui" + prius.rent());
console.log("gui" + prius.return());
console.log("TEJKOTO STUPVANE", angelaMergel);
console.log("TEJKOTO STUPVANE", angelaMergel);
console.log("TEJKOTO STUPVANE", angelaMergel);
console.log("TEJKOTO STUPVANE", angelaMergel);
console.log("TEJKOTO STUPVANE", angelaMergel);
