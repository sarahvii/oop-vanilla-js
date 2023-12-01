// task 1

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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

