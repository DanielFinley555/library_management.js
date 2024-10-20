//Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN, _isAvailable = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = _isAvailable;
    }

    getDetails() {
        return `${this.title}, ${this.author}, ${this.ISBN}`;
    }
    
    // getter for isAvailable
    get isAvailable() {
        return this._isAvailable;
    }
    // setter for isAvailable
    set isAvailable(x) {
        this._isAvailable = x;
    }
};



//Task 2: Create a Section Class

class Section {
    //make books an array
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    // using push to add a book to the books array
    addBook(book) {
        this.books.push(book);
    }

    //using filter to calculate total number of books in section
    getAvailableBooks() {
        return this.books.filter((book) => {
            book.isAvailable;
        })
    }

    //listing all book objects in the section
    listBooks() {
        console.log(`The books in this section are ${this.name}:`);
        this.books.forEach((book) => {
            console.log(book);
        })
    }



//Task 5: Handle Books Borrowing and Returning

calculateTotalBooksAvailable() {
}

}



//Task 3: Create a Patron Class

class Patron {
    //setting borrowedBooks to an empty array
    constructor(name, borrowedBooks = []) {
        this.name = name;
        this.borrowedBooks = borrowedBooks;
    }

    borrowBook(book) {
        if (book.isAvailable) {
            //Add book to pratons array
            this.borrowedBooks.push(book)
            //Update book status to borrowed
            book.isAvailable = false
        }
    }

    returnBook(book) {
        //check if book is borrowed
        if (book.isAvailable = false) {
            //set varibable found
            const found = this.borrowedBooks.find((bb) => (bb.ISBN == book.ISBN));
            //update book to available if found
            if (found) {
                book.isAvailable = true
                //Remove book from patrons array if found
                this.borrowedBooks.filter((bb => bb.ISBN == book.ISBN));
            }
        }
    }
}



//Task 4: Create a VIPPatron Class that Inherits from PatronLinks to an external site.

class VIPPatron extends Patron {
    constructor(name, borrowedBooks, priority) {
        super(name, borrowedBooks);
        this.priority = priority;
    }

    //borrowBook method overwritten
    borrowBook(book) {
        
    }
}



//Task 6: Create and Manage Sections and Patrons

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("1984", "George Orwell", "1234567890");
const book2 = new Book("Brave New World", "Aldous Huxley", "0987654321");
const book3 = new Book("The Selfish Gene", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const regularPatron = new Patron("John Doe");
const vipPatron = new VIPPatron("Jane Smith", true);

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);

// List books and availability
fiction.listBooks();

// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);
