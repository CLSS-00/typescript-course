// works the same with all primitive types
// ...

let apples: number = 5;
// let apples: number = false;

apples = 10;
// apples = 'something'

let kindaEmpty: null = null;

let nothing: undefined = undefined;

// bultin objects
const date: Date = new Date();

// Array
// allows empty assignment
let colors: string[] = [];

let numbers: number[] = [0, 1];

//Classes
class Car {}
let car: Car = new Car();

//Object ligeral
interface Point {
  x: number;
  y: number;
}
let point0: Point = {
  x: 10,
  y: 20,
};

// can also be inline
let point1: { x: number; y: number } = {
  x: 10,
  y: 20,
};
