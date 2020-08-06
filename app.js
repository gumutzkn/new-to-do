/**                  Book Class: Represents a Book      */
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

/**                   UI Class: Handle UI Tasks          */
class UI {
  static addBookToList(book) {
    const list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }

  static clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    // Create a Div Element
    const div = document.createElement("div");

    // Give Classname to Div Dynamically
    div.className = `alert alert-${className}`;

    // Put text inside the div element
    div.appendChild(document.createTextNode(message));

    // Select Container
    const container = document.querySelector(".container");

    // Select Form
    const form = document.getElementById("book-form");

    // Show Message Inside the Div Before the Form Element
    container.insertBefore(div, form);

    // Vanish Message in 3 Seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }
}

/**                  Store Class: Handles Storage        */

/**                  Event: Display Books                */

/**                  Event: Add a Book                   */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Prevent Reload Action
  e.preventDefault();

  // Get Form Values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Create Book
  const book = new Book(title, author, isbn);

  // Add Book to UI
  UI.addBookToList(book);

  // Clear Fields
  UI.clearFields();
});

/**                   EVENT: REMOVE A BOOK                */
document.getElementById("book-list").addEventListener("click", (e) => {
  // Remove Book From UI
  UI.deleteBook(e.target);
});
