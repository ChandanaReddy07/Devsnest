// get element by id

var banner = document.getElementById('page-banner');
console.log(banner);
var bookList = document.getElementById('book-list');
console.log(bookList);

//get element by class name 

var titles = document.getElementsByClassName('title');
var lis = document.getElementsByTagName('li');
console.log();
Array.from(lis).forEach((x) => {
    console.log(x);
})

// query selector 
var wrap = document.querySelector('#wrapper');
// console.log(wrap);
var title = document.querySelector('#book-list');
// console.log(title);

const arr = [];

var books = document.querySelectorAll('#book-list li .name');
// console.log(books);
books.forEach((book) => {
    arr.push(book.textContent)
    console.log(book);
})

arr.forEach((book) => {
    console.log(book);
})
const handleClick = () => {
    console.log("helklo");
    arr.sort();
    print();
}
const print = () => {
    books.forEach((book,index) => {
        book.innerHTML = arr[index];
})
}

var list = document.querySelector('#book-list ul');
console.log(list);
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
      list.removeChild(li);
    }

})
// forms
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    //selecting the input tags
    var name = addForm.querySelector('input[type=text]').value ;
    console.log(name);

    // creattion of elements
    const li = document.createElement('li');
    const bookName = document.createElement('span')
    const deleteBtn=document.createElement('span')
    // add text content
    bookName.textContent = name;
    deleteBtn.textContent = 'delete';

    // add css classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    console.log(name);
})