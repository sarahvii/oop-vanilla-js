// task 3

class User {
    constructor(username) {
        this._username = username;
    }

    // getter
    get username() {
        return this._username;
    }

    // setter
    set username(username) {
        this._username = username;
    }

    // method
    expressYourRole() {
        console.log("Role undefined")
    }

} 

class Admin extends User {
    expressYourRole() {
        console.log("Admin")
    }

    sayHello() {
        console.log("Hello admin, " + this.username)
    }
}

const admin1 = new Admin('Balthazar')
admin1.sayHello();
