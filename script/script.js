const form = document.querySelector('form');
const listOfBooks = document.querySelector('.books-list');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const localBooks = localStorage.getItem('localLibrary');

class Library {
  constructor(name, listOfBook) {
    this.name = name;
    this.listOfBook = listOfBook;
  }

  setLocalInfo() {
    if (localBooks === null) {
      this.listOfBook = [];
    } else {
      this.listOfBook = JSON.parse(localBooks);
      for (let i = 0; i < this.listOfBook.length; i += 1) {
        listOfBooks.innerHTML += `
        <div class="book">  
        <h2 class="bookTitle text-color">"${this.listOfBook[i].title}" by </h2>
        <p class="bookAuthor text-color">${this.listOfBook[i].author}</p>
        <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${this.listOfBook[i].title}" class="removeBookBtn master master-button">Remove</button>
        </div>`;
        const removeBookBtns = document.querySelectorAll('.removeBookBtn');
        removeBookBtns.forEach((button) => {
          button.addEventListener('click', () => {
            this.removeBook(button.value);
          });
        });
      }
    }
  }

  addBook = (title, author) => {
    this.listOfBook.push({ title: `${title}`, author: `${author}` });
    window.localStorage.setItem('localLibrary', JSON.stringify(this.listOfBook));
  };

  updateStorage = () => {
    localStorage.clear();
    localStorage.setItem('localLibrary', JSON.stringify(this.listOfBook));
  };

  removeBook = (keyWord) => {
    const index = this.listOfBook.findIndex((x) => x.title === keyWord);
    this.listOfBook.splice(index, 1);
    this.updateStorage();
  };
}

const lib1 = new Library('testLibrary', []);
lib1.setLocalInfo();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  lib1.addBook(bookTitle.value, bookAuthor.value);
  listOfBooks.innerHTML += `
  <div class="book">
    <h2 class="bookTitle text-color">"${lib1.listOfBook[lib1.listOfBook.length - 1].title}" by </h2>
    <p class="bookAuthor text-color">${lib1.listOfBook[lib1.listOfBook.length - 1].author}</p>
    <button type="button" onclick="this.parentNode.parentNode.removeChild(this.parentNode)" value="${lib1.listOfBook[lib1.listOfBook.length - 1].title}" class="removeBookBtn master master-button">Remove</button>
  </div>`;
  const removeBookBtns = document.querySelectorAll('.removeBookBtn');
  removeBookBtns.forEach((button) => {
    button.addEventListener('click', () => {
      lib1.removeBook(button.value);
    });
  });

  form.reset();
});
