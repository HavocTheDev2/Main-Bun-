// Working with importing local exports.

export let ShopBalance: number = 1000;

import { Customer } from "customer";
import { Item, PurchaseProcess} from "item";
import moment from "moment";
const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");

// Fun)ction to generate a random user ID
let usedIds: number[] = [];
function generateUserId(): undefined | number {
    let userId: number = Math.floor(Math.random() * 2000000) + 1;
    if (usedIds.includes(userId)) {
        generateUserId();
    } else {
        usedIds.push(userId);
        return userId;
    }
}

function ChildExample(): void {
// Creating a customer object
let customer: Customer = new Customer("John", "Doe", 11);

// Creating an item object
let item: Item = new Item("Apple", 0.50, 10, "Fruit");

// Creating a purchase process object
let purchaseProcess: PurchaseProcess = new PurchaseProcess(item, customer);

customer.id = generateUserId();
purchaseProcess.paidAmmount = 8.00;
let record_data = {
  customer: `${customer.firstName} ${customer.lastName}`,
  age: customer.age,
  id: `#${customer.id}`,
  item: item.name,
  price: `$${item.price.toFixed(2)}`,
  quantity: item.quantity,
  maturityTag: item.maturityTag,
  date_time: currentDate
};
console.log(record_data);
Bun.write("records.txt", JSON.stringify(record_data))
// Delaying the purchase of the item by 5 seconds
setTimeout(() => {
    purchaseProcess.purchaseItem();
}
, 5000);
}

function AdultExample(): void {
// Creating a customer object
let customer: Customer = new Customer("Jane", "Doe", 25);

// Creating an item object
let item: Item = new Item("Beer", 2.50, 10, "Adult");

// Creating a purchase process object
let purchaseProcess: PurchaseProcess = new PurchaseProcess(item, customer);

customer.id = generateUserId();
purchaseProcess.paidAmmount = 5.00;
let record_data = {
  customer: `${customer.firstName} ${customer.lastName}`,
  age: customer.age,
  id: `#${customer.id}`,
  item: item.name,
  price: `$${item.price.toFixed(2)}`,
  quantity: item.quantity,
  maturityTag: item.maturityTag,
  date_time: currentDate
};
console.log(record_data);
Bun.write("records.txt", JSON.stringify(record_data))
// Delaying the purchase of the item by 5 seconds
setTimeout(() => {
    purchaseProcess.purchaseItem();
}
, 5000);
}

function NoAmmountExample(): void {
// Creating a customer object
let customer: Customer = new Customer("John", "Doe", 11);
// Creating an item object
let item: Item = new Item("Apple", 0.50, 10, "Fruit");

// Creating a purchase process object
let purchaseProcess: PurchaseProcess = new PurchaseProcess(item, customer);

let date = new Date();
customer.id = generateUserId();
let record_data = {
  customer: `${customer.firstName} ${customer.lastName}`,
  age: customer.age,
  id: `#${customer.id}`,
  item: item.name,
  price: `$${item.price.toFixed(2)}`,
  quantity: item.quantity,
  maturityTag: item.maturityTag,
  date_time: currentDate
};
console.log(record_data);
Bun.write("records.txt", JSON.stringify(record_data))
// Delaying the purchase of the item by 5 seconds
setTimeout(() => {
    purchaseProcess.purchaseItem();
}
, 5000);
}

function NoQuantityExample(): void {
// Creating a customer object
let customer: Customer = new Customer("John", "Doe", 11);

// Creating an item object
let item: Item = new Item("Apple", 0.50, 0, "Fruit");

// Creating a purchase process object
let purchaseProcess: PurchaseProcess = new PurchaseProcess(item, customer);

customer.id = generateUserId();
purchaseProcess.paidAmmount = 8.00;
let record_data = {
  customer: `${customer.firstName} ${customer.lastName}`,
  age: customer.age,
  id: `#${customer.id}`,
  item: item.name,
  price: `$${item.price.toFixed(2)}`,
  quantity: item.quantity,
  maturityTag: item.maturityTag,
  date_time: currentDate
};
console.log(record_data);
Bun.write("records.txt", JSON.stringify(record_data))

purchaseProcess.purchaseItem();
}

function NotOldEnoughExample(): void {
// Creating a customer object
let customer: Customer = new Customer("John", "Doe", 11);

// Creating an item object
let item: Item = new Item("Beer", 2.50, 10, "Adult");

// Creating a purchase process object
let purchaseProcess: PurchaseProcess = new PurchaseProcess(item, customer);

customer.id = generateUserId();
purchaseProcess.paidAmmount = 5.00;
let record_data = {
  customer: `${customer.firstName} ${customer.lastName}`,
  age: customer.age,
  id: `#${customer.id}`,
  item: item.name,
  price: `$${item.price.toFixed(2)}`,
  quantity: item.quantity,
  maturityTag: item.maturityTag,
  date_time: currentDate
};
console.log(record_data);
Bun.write("records.txt", JSON.stringify(record_data))

purchaseProcess.purchaseItem();
}

AdultExample();


// Path: TypeScript/Practice Project/Exports/customer.ts
/*
Common color codes:
    Black: \x1b[30m
    Red: \x1b[31m
    Green: \x1b[32m
    Yellow: \x1b[33m
    Blue: \x1b[34m
    Magenta: \x1b[35m
    Cyan: \x1b[36m
    White: \x1b[37m
    Reset: \x1b[0m
    Bright: \x1b[1m
    Dim: \x1b[2m
    Bold: \x1b[1m
    Underlined: \x1b[4m
    Reversed: \x1b[7m
    Hidden: \x1b[8m
    Italic: \x1b[3m (Not widely supported)
*/

/* async function read(path: string): Promise<string> {
    return new Promise((resolve, reject) => {
        let file = Bun.file(path);
        file.text().then((text) => {
            resolve(text);
        }
        ).catch((err) => {
            reject(err);
        }
        );
 });
}
*/