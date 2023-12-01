// task 2

class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // getter
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    // setter
    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    // method to say hello
    hello() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
} 

const user1 = new User('John', 'Doe');
user1.hello();

const user2 = new User('Jane', 'Doe');
user2.hello();