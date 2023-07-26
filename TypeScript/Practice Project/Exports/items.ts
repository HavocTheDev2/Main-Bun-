// In this file we will export the Item class
// We will import this class in the index.ts file
// This file links to the customer.ts file, for this file will contain the items are customer can purchase and the processes they can go through to purchase them
// We will create an object of this class in the index.ts file

import { Customer } from "./customer";
import { ShopBalance } from "../index";

export class Item {
    private _name: string;
    private _price: number;
    private _quantity: number;
    private _maturityTag: string;

    constructor(name: string, price: number, quantity: number, maturityTag: string) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._maturityTag = maturityTag;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(value: number) {
        this._quantity = value;
    }

    public get maturityTag(): string {
        return this._maturityTag;
    }

    public set maturityTag(value: string) {
        this._maturityTag = value;
    }
}

// Purchase Process: (Class)
export class PurchaseProcess {
    private _item: Item;
    private _customer: Customer;
    private _paidAmmount: number | undefined;

    constructor(item: Item, customer: Customer, paidAmmount?: number) {
        this._item = item;
        this._customer = customer;
        this._paidAmmount = paidAmmount;
    }

    public get item(): Item {
        return this._item;
    }

    public set item(value: Item) {
        this._item = value;
    }

    public get customer(): Customer {
        return this._customer;
    }

    public set customer(value: Customer) {
        this._customer = value;
    }

    public get paidAmmount(): number | undefined {
        return this._paidAmmount;
    }

    public set paidAmmount(value: number | undefined) {
        this._paidAmmount = value;
    }

    public purchaseItem(): void {
        if(this._paidAmmount === undefined) {
            console.error("No ammount paid.");
            return;
        }
        let needsChange: boolean = this._paidAmmount > this.item.price;
        if (this.item.quantity <= 0) {
            console.error("Item not available.");
            return;
        }
    
        if (this.item.maturityTag == "Adult" && this.customer.age < 18) {
            console.error("Customer not old enough to purchase item.");
            return;
        }
    
        this.item.quantity--;
        console.log("\x1b[1m\x1b[32mItem purchased\x1b[0m");
        if (needsChange) {
            let balance: number = ShopBalance;
            let change: number = this._paidAmmount - this.item.price;
            console.log(`Change: $${change.toFixed(2)}`);
            balance += this.item.price;
            balance -= change;
            console.log(`Shop balance: $${balance.toFixed(2)}`);
        }

    }

}
