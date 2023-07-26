/*

// Arrays
let names: string[] = ['John', 'Sara', 'Jack'];
let numbers: number[] = [1, 2, 3, 4, 5];
let bools: boolean[] = [true, false, true];

// Objects
let person: { name: string, age: number } = {
    name: 'John',
    age: 30
};

// Dictionary
let dictionary: { [key: string]: string } = {
    'name': 'John',
    'age': '30'
};

// Tuple
let tuple: [string, number] = ['John', 30];

// Enum
enum Color { Red, Green, Blue };
let color: Color = Color.Red;

// Any
let any: any = 1;
any = 'John';
any = true;

// Void
function log(message: string): void {
    console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Never
function error(message: string): never {
    throw new Error(message);
}

// Type Assertions
let message: any = 'Hello World';
let endsWithD = (<string>message).endsWith('d');
let alternativeWay = (message as string).endsWith('d');

// Getting the length of an array
let numbers1: number[] = [1, 2, 3, 4, 5];
let length1: number = (<number[]>numbers).length;
let alternativeWay1: number = (numbers as number[]).length;

// Arrow Functions
const log1 = (message: string) => console.log(message);

// Extended Arrow Functions
const log2 = (message: string) => {
    setTimeout(() => console.log(message), 1000);
}

// Interfaces
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
});

// Getting keys and values from a set of data
let data_example : [string, string][] = [
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
];

let dataMap = new Map<string, string>(data_example);

// Accessing a specific Key/Value pair from the map using its index (0 based)
console.log(data_example[0][0]);

// Accessing the keys from the map
for (let key of dataMap.keys()) {
    console.log(key);
}

// Accessing the values from the map
for (let value of dataMap.values()) {
    console.log(value);
}
*/

// Create a JSON style object
const data_example = {
    
}
// Writing to JSON file
import * as fs from 'fs';
let data = JSON.stringify(data_example);
fs.writeFileSync('data.json', data);
