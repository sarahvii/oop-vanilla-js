// task 05

class User {
    constructor(username) {
        if (this.constructor === User) {
            throw new TypeError("Cannot construct Abstract instances directly")
        }

        this._username = username;
    }

    stateYourRole() {
        throw new TypeError("Do not call abstract method stateYourRole directly from child")
    }

    get username() {
        return this._username;
    }

    set username(username) {
        this._username = username;
    }
}

class Admin extends User {
    constructor(username) {
        super(username)
    }

    stateYourRole() {
        return "admin"
    }
}

class Viewer extends User {
    constructor(username) {
        super(username)
    }

    stateYourRole() {
        return "viewer"
    }
}

const admin = new Admin("Balthazar");
console.log(admin.username);
console.log(admin.stateYourRole());

const viewer = new Viewer("Melchior");
console.log(viewer.username);
console.log(viewer.stateYourRole());

