function Book(title, author) {
  this.title = title;
  this.author = author;
}

function Library(name) {
  this.name = name;
  this.books = [];
}

Book.prototype.toString = function() {
  return this.title + ' by ' + this.author
};

Library.prototype.addBook = function(book) {
  this.books.push(book)
};

Library.prototype.listBooks = function() {
  return this.books.forEach(toString);
};

var seaLibrary = new Library('Seattle Public Library');

var eloRuby = new Book('Eloquent Ruby', 'Russ Olsen');

seaLibrary.addBook(eloRuby);

seaLibrary.listBooks();
