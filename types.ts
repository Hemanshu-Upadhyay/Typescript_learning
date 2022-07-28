// Basic Types in Typescript
let age: number = 50;
console.log(age);

let isBeginner: boolean = true;
let total: number = 0;
let firstname: string = "Sachin";
let x: any = "Hello";

// Arrays
let id: number[] = [1, 2, 3, 4];
// id.push("Hello"); // Error
id.push(5);

let person: [string] = ["Sachin"];
// person.push(7); // Error
person.push("Tendulkar");

// Tuples - Array with mixed types
let data: [string, number] = ["Sachin", 50];
data.push(40, "Hello ");

// Tuple Array
let data1: [string, number][] = [
  ["Sachin", 50],
  ["Tendulkar", 40],
];

// Union Types
let data2: Number | String = 50;

// Enum
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
let d: Direction = Direction.Down;
console.log(d);

// Objects
let employee: object;
employee = {
  name: "Sachin",
  age: 50,
};

// Object with types
const employee1: {
  name: string;
  age: number;
} = {
  name: "Sachin",
  age: 50,
  // isminor: false // Error
};

// Type assertion
let data3: any = "Hello";
let strLength: number = (<string>data3).length;
console.log(strLength);

// Functions
function add(a: number, b: number): number {
  return a + b;
}
add(5, 10);
// add("Hello", "World"); // Error
// add(5, 10, 15); // Error
// add(5,"Hello"); // Error

// Void
// Void is used when a function does not return anything
function log({ message }: { message: string; }): void {
  console.log(message);
}
log({ message: "Hello World" });


// Interfaces
interface Person {
    name: string;
    age: number;
    isMinor?: boolean; // Optional
}

const person1: Person = {
    name: "Sachin",
    age: 50,
    // age: "50",// Error
    isMinor: false
}

// Readonly
interface Person1 {
    readonly name: string;
    age: number;
    isMinor?: boolean; // Optional
}

const person2: Person1 = {
    name: "Sachin",
    age: 50,
    isMinor: false
}
// person2.name = "Tendulkar"; // Error

// Interfaces with functions
interface addnumbers {
    (a: number, b: number): number;
}

const addnumbers1: addnumbers = (a: number, b: number): number => {
    return a + b;
}

// Classes
class Employee {
    name: string;
    age: number;
    isMinor: boolean;
    constructor(name: string, age: number, isMinor: boolean) {
        this.name = name;
        this.age = age;
        this.isMinor = isMinor;
    }
    log() {
        console.log(this.name, this.age, this.isMinor);
    }
}

const employee2 = new Employee("Sachin", 50, false);
employee2.log();

// data modifiers
class Person4 {
    public name: string;
    private age: number;
    protected isMinor: boolean;
    constructor(name: string, age: number, isMinor: boolean) {
        this.name = name;
        this.age = age;
        this.isMinor = isMinor;
    }
    log() {
        console.log(this.name, this.age, this.isMinor);
    }
}

const Sachin = new Person4("Sachin", 50, false);
Sachin.log();
// Sachin.age = 40; // Error
// Sachin.isMinor = true; // Error
// console.log(Sachin.age); // Error

