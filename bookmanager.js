//extra exercise :)

const book = {
    _title: '',
    _author: '',
    _genre: '',

    set title(titleToCheck) {
        if (typeof titleToCheck === 'string'){
            return this._title = titleToCheck;
        }
    },
    set author(authorToCheck) {
        if (typeof authorToCheck === 'string'){
            return this._author = authorToCheck;
        }
    },
    set genre(genreToCheck) {
        if (typeof genreToCheck === 'string'){
            return this._genre = genreToCheck;
        }
    },

    get message() {
        if (this._title && this._author && this._genre){
            return `the book title is ${this._title}. the book author is ${this._author}. the book genre is ${this._genre}`;
        } else {
            return 'The info of the book is incorrectly!'
        }
    },
}

book.title = 'HP'
book.author = 'JK'
book.genre = 'fantasy'
console.log(book.message)