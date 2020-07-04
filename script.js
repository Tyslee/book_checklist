const addButt = document.querySelector('#add');
const library = document.querySelector('#library');
let myLibrary = JSON.parse(localStorage.getItem('myLib')) || [];

// book struct
function book(title, author, readStatus, getRid){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.getRid = getRid;
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

    var closeButton = document.createElement('button');
    closeButton.classList.add('close');
    closeButton.innerHTML = "X";
    closeButton.addEventListener('click', function(e){
        (myLibrary[libIndex]).getRid = true;
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
    if((myLibrary[libIndex]).readStatus == true){
        addBook.style.color = "#A9A9A9";
        localStorage.setItem('myLib', JSON.stringify(myLibrary));
    }
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
    localStorage.setItem('myLib', JSON.stringify(myLibrary));
}

addButt.addEventListener('click', () =>{
    var newBName = document.querySelector('#bName').value;
    var newBAuthor = document.querySelector('#bAuthor').value;

    newBook = new book(newBName, newBAuthor, false, false);
    myLibrary.push(newBook);

    localStorage.setItem('myLib', JSON.stringify(myLibrary));
    addBookToLibrary(myLibrary.length - 1);
});

// Get rid of previously closed books
function rid(){
    let length = myLibrary.length;

    console.log(myLibrary)
    for(i = length - 1; i >= 0; i--){
        if((myLibrary[i]).getRid == true){
            myLibrary.splice(i, 1);
        }
    }
    localStorage.setItem('myLib', JSON.stringify(myLibrary));
}

function load(){
    for(i = 0; i < myLibrary.length; i++){
        console.log(i);
        addBookToLibrary(i);
    }
}

rid()
load();