const addButt = document.querySelector('#add');
const library = document.querySelector('#library');

let myLibrary = [];

function book(title, author, readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary(libIndex){
    var newLB = document.createElement('hr');
    library.appendChild(newLB);

    // BOOK NAME, AUTHOR, INFO
    var bookName = document.createElement('p');
    bookName.innerHTML = "Book Title: " + (myLibrary[libIndex]).title;
    var bookAuthor = document.createElement('p');
    bookAuthor.innerHTML= "Book Author: " + (myLibrary[libIndex]).author;

    var bInfo = document.createElement('div');
    bInfo.classList.add('info');
    bInfo.appendChild(bookName);
    bInfo.appendChild(bookAuthor);

    // CLOSE BUTTON, DATE, EXTRA
    var closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.innerHTML = "X";
    closeButton.addEventListener('click', function(e){
        newLB.remove();
        addBook.remove();
    })

    var date = new Date();
    var curDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var bDate = document.createElement('p');
    bDate.classList.add('dates');
    bDate.innerHTML = "Date: " + curDate;

    var bExtra = document.createElement('div');
    bExtra.classList.add('extra');
    bExtra.appendChild(closeButton);
    bExtra.appendChild(bDate);

    // ADDING BOOK TO LIBRARY
    var addBook = document.createElement('div');
    addBook.classList.add('book');
    addBook.setAttribute('id', 'uniqueBook');
    addBook.addEventListener('click', function(e){
        if((myLibrary[libIndex]).readStatus == false){
            addBook.style.color = "#A9A9A9";
            (myLibrary[libIndex]).readStatus = true;
            localStorage.setItem('myLib', JSON.stringify(myLibrary));
        }
        else{
            addBook.style.color = "black";
            (myLibrary[libIndex]).readStatus = false;
            localStorage.setItem('myLib', JSON.stringify(myLibrary));
        }
    });
    addBook.appendChild(bInfo);
    addBook.appendChild(bExtra);
    library.appendChild(addBook);

    alert((myLibrary[0]).title);
}

addButt.addEventListener('click', () =>{
    var newBName = document.querySelector('#bName').value;
    var newBAuthor = document.querySelector('#bAuthor').value;

    newBook = new book(newBName, newBAuthor, false);
    myLibrary.push(newBook);

    localStorage.setItem('myLib', JSON.stringify(myLibrary));
    addBookToLibrary(myLibrary.length - 1);
});

