var fxx = new Ferrari('fxx', 5000);

console.log(0, 'fxx.brand should be ferrari', fxx.brand);
console.log(0.1, 'fxx.model should be fxx', fxx.model);
console.log(0.2, 'fxx.motor should be petrol', fxx.motor);
console.log(1, 'fxx.start() should start big motor', fxx.start());
console.log(2, 'fxx.stop() should stop big motor', fxx.stop());

var fiesta = new Car('ford', 'fiesta');

console.log(1, 'fiesta.brand should be ford', fiesta.brand);
console.log(2, 'fiesta.model should be fiesta', fiesta.model);
console.log(3, 'fiesta.motor should be petrol', fiesta.motor);
console.log(4, 'fiesta.start() should start petrol motor', fiesta.start());
console.log(4, 'fiesta.stop() should stop petrol motor', fiesta.stop());

var fiestaD = new Car('ford', 'fiesta', 'diesel');

console.log(1, 'fiestaD.brand should be ford', fiestaD.brand);
console.log(2, 'fiestaD.model should be fiesta', fiestaD.model);
console.log(3, 'fiestaD.motor should be diesel', fiestaD.motor);
console.log(4, 'fiestaD.start() should start diesel motor', fiestaD.start());
console.log(4, 'fiestaD.stop() should stop diesel motor', fiestaD.stop());

//CHALLENGE PROTOTYPE
//Person
function Person(firstName, lastName, age, gender, interests) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.interests = interests
}
Person.prototype.greeting = function () {
    return "Hi i'm " + this.firstName
}
Person.prototype.farewell = function () {
    return this.firstName + ' has left the building. Bye for now!'

}
Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' is' + this.age + ' years old. ' (this.gender == 'famel') ? "She" : "He" + ' likes ' + this.interests.join(", ");
}
//Student
function Student(firstName, lastName, age, gender, interests) {
    Person.call(this, firstName, lastName, age, gender, interests)
}
Student.prototype = new Person();
Student.prototype.greeting = function () {
    return "Yo i'm " + this.firstName;
}
//Teacher
function Teacher(firstName, lastName, age, gender, interests, subject) {
    this.subject = subject
    Person.call(this, firstName, lastName, age, gender, interests)
}
Teacher.prototype = new Person()
Teacher.prototype.greeting = function () {
    return 'Hello. My name is ' + (this.gender == "male" ? "Mr." : "Mrs.") + this.lastName + ' and I teach ' + this.subject
}

var p1 = new Person("Victor", "Gamez", 21, "male", ["sports", "programing", "games", "fun"])
var s1 = new Student("Paula", "Sanchez", 18, "famel", ["football", "run", "fun"])
var t1 = new Teacher("Eric", "Bins", 42, "male", ["persons", "eat", "read", "fun"], "Psicology")