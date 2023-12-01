// task 4

class User {
    constructor() {
        this._numberOfArticles = 0;
    }

    getNumberOfArticles() {
        return this._numberOfArticles
    }

    setNumberOfArticles(numberOfArticles) {
        this._numberOfArticles = numberOfArticles
    }

    calcScores() {
        console.log('scores calculated here')
    }
}

class Author extends User {
    constructor() {
        super();
    }

    calcScores() {
        return this._numberOfArticles * 10 + 20;
    }
}

class Editor extends User {
    constructor() {
        super();
    }

    calcScores() {
        return this._numberOfArticles * 6 + 15
    }
}

const author = new Author();
author.setNumberOfArticles(8);
console.log(author.calcScores());

const editor = new Editor();
editor.setNumberOfArticles(15);
console.log(editor.calcScores());
