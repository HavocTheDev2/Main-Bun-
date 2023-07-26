// In this file we will export the Customer class
// We will import this class in the index.ts file
// We will create an object of this class in the index.ts file

export class Customer {
    private _firstName: string;
    private _lastName: string;
    private _age: number;

    // Create an undefined property called _id, which will be assigned a value in index.ts
    private _id?: number;

    constructor(firstName: string, lastName: string, age: number, id?: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._id = id;

    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get id() : number | undefined {
        return this._id;
    }

    public set id(v : number | undefined) {
        this._id = v;
    }
}