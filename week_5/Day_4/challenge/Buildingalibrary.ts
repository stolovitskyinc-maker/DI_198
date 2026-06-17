// 1. Define the Book Interface
interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string; // Optional property
}

// 2. Base Library Class
class Library {
    // Protected allows subclasses like DigitalLibrary to access the array directly
    protected books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | string {
        const foundBook = this.books.find(book => book.isbn === isbn);
        return foundBook ? foundBook : `Book with ISBN ${isbn} not found.`;
    }
}

// 3. Subclass DigitalLibrary extending Library
class DigitalLibrary extends Library {
    public readonly website: string;

    constructor(website: string) {
        super(); // Call the base class constructor
        this.website = website;
    }

    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}

// 4. Test the System
const myDigitalLibrary = new DigitalLibrary("https://citylibrary.digital");

// Add some books
myDigitalLibrary.addBook({
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "9780743273565",
    publishedYear: 1925,
    genre: "Classic Fiction"
});

myDigitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "9780451524935",
    publishedYear: 1949
    // genre is omitted here since it is optional
});

// Print out book details by ISBN
console.log("--- Fetching Book Details ---");
console.log(myDigitalLibrary.getBookDetails("9780451524935"));

// Print out list of all book titles
console.log("\n--- Listing All Book Titles ---");
console.log(myDigitalLibrary.listBooks());

// Verify website is read-only
console.log(`\nLibrary Website: ${myDigitalLibrary.website}`);
// myDigitalLibrary.website = "https://hacked.com"; // TS Error: Cannot assign to 'website' because it is a read-only property.
