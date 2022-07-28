// Basic Types in Typescript
var age = 50;
console.log(age);
var isBeginner = true;
var total = 0;
var firstname = "Sachin";
var x = "Hello";
// Arrays
var id = [1, 2, 3, 4];
// id.push("Hello"); // Error
id.push(5);
var person = ["Sachin"];
// person.push(7); // Error
person.push("Tendulkar");
// Tuples - Array with mixed types
var data = ["Sachin", 50];
data.push(40, "Hello ");
// Tuple Array
var data1 = [
    ["Sachin", 50],
    ["Tendulkar", 40],
];
// Union Types
var data2 = 50;
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var d = Direction.Down;
console.log(d);
// Objects
var employee;
employee = {
    name: "Sachin",
    age: 50
};
// Object with types
var employee1 = {
    name: "Sachin",
    age: 50
};
// Type assertion
var data3 = "Hello";
var strLength = data3.length;
console.log(strLength);
// Functions
function add(a, b) {
    return a + b;
}
add(5, 10);
// add("Hello", "World"); // Error
// add(5, 10, 15); // Error
// add(5,"Hello"); // Error
// Void
// Void is used when a function does not return anything
function log(_a) {
    var message = _a.message;
    console.log(message);
}
log({ message: "Hello World" });
var person1 = {
    name: "Sachin",
    age: 50,
    // age: "50",// Error
    isMinor: false
};
var person2 = {
    name: "Sachin",
    age: 50,
    isMinor: false
};
var addnumbers1 = function (a, b) {
    return a + b;
};
// Classes
var Employee = /** @class */ (function () {
    function Employee(name, age, isMinor) {
        this.name = name;
        this.age = age;
        this.isMinor = isMinor;
    }
    Employee.prototype.log = function () {
        console.log(this.name, this.age, this.isMinor);
    };
    return Employee;
}());
var employee2 = new Employee("Sachin", 50, false);
employee2.log();
// data modifiers
var Person4 = /** @class */ (function () {
    function Person4(name, age, isMinor) {
        this.name = name;
        this.age = age;
        this.isMinor = isMinor;
    }
    Person4.prototype.log = function () {
        console.log(this.name, this.age, this.isMinor);
    };
    return Person4;
}());
var Sachin = new Person4("Sachin", 50, false);
Sachin.log();
// Sachin.age = 40; // Error
// Sachin.isMinor = true; // Error
// console.log(Sachin.age); // Error
