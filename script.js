const myLibrary = [];
const librarySelector = document.querySelector(".library");
const addButton = document.querySelector("#add-button");
const addForm = document.querySelector("form");
const titleField = document.querySelector("#title");
const authorField = document.querySelector("#author");
const pagesField = document.querySelector("#pages");
const readField = document.querySelector("#read");
const submitButton = document.querySelector("#submit");

addButton.addEventListener("click", displayForm)
submitButton.addEventListener("click", () => {
  let title = titleField.value;
  let author = authorField.value;
  let pages = pagesField.value;
  let read = readField.value;
  let book = new Book(title, author, pages);
  myLibrary.push(book);
  librarySelector.appendChild(htmlBook(book));
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.getRead = function() {return this.read ? "yes" : "no"}
}

function htmlBook(book) {
  let bookNode = document.createElement("div");
  bookNode.classList.add("book");
  let titleNode = document.createElement("h2");
  let authorNode = document.createElement("p");
  let pagesNode = document.createElement("p");
  let readNode = document.createElement("p");
  let toggleNode = document.createElement("button");
  let deleteNode = document.createElement("button");

  titleNode.textContent = book.title;
  titleNode.classList.add('title');
  authorNode.textContent = "Author: " + book.author;
  authorNode.classList.add('author');
  pagesNode.textContent = "Pages: " + book.pages;
  pagesNode.classList.add('pages');
  readNode.textContent = "Read? " + book.getRead();
  readNode.classList.add('read');
  toggleNode.textContent = "Toggle read";
  toggleNode.classList.add('toggle');
  deleteNode.textContent = "Delete";
  deleteNode.classList.add('delete');
  
  toggleNode.addEventListener("click", () => {
    book.read = book.read ? false : true;
    readNode.textContent = "Read? " + book.getRead();
  })
  deleteNode.addEventListener("click", () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    bookNode.parentNode.removeChild(bookNode);
  });

  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pagesNode);
  bookNode.appendChild(readNode);
  bookNode.appendChild(toggleNode);
  bookNode.appendChild(deleteNode);

  return bookNode;
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    librarySelector.appendChild(htmlBook(book));
  })
}

function displayForm(e) {
  let display = addForm.style.display === "flex";
  let choice = display ? "none" : "flex";
  console.log(addForm.style.display, choice);
  addForm.style.display = choice;
}

myLibrary.push(new Book("Bibble", "Jebus", 100, true))
myLibrary.push(new Book("Bibble2", "Jebus2", 200, true))
myLibrary.push(new Book("Bibble3", "Jebus3", 300, false))

displayLibrary();
