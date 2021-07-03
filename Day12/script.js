var wrap = document.querySelector('#wrapper .contains');

var arr=[{
    title:"i have to go park",
    done:false
}
,
{
    title:"have to eat",
    done:false
}]

var list = document.querySelector('#wrapper .contains #todo-list ul');
 console.log(list);
function loadTodo(){
    arr.map(todo=>{
        
        const li = document.createElement('li');
        const todotitle = document.createElement('span')
        const stateBtn=document.createElement('span')
        const deleteBtn=document.createElement('span')
        
    
    
        todotitle.textContent = todo.title;
        stateBtn.textContent="Mark Done"
        deleteBtn.textContent = 'delete';
    
        // add css classes
        todotitle.classList.add('name');
    
        stateBtn.classList.add('statebtn');
    
    
        console.log("arrr"+arr)
        deleteBtn.classList.add('delete');
    
        li.appendChild(todotitle);
       
        li.appendChild(stateBtn);
      
        li.appendChild(deleteBtn);
        list.appendChild(li)
    
    })

}

loadTodo()
var todos = document.querySelectorAll('#todo-list li .name');
// console.log(books);


list.addEventListener('click', (e) => {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        console.log("li"+li)
        
      list.removeChild(li);
    }
    if (e.target.className == 'statebtn') {
        const li = e.target.parentElement;
       li.classList.add('green')
    }

    
}
)

// forms
const addForm = document.forms['adding'];
addForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    var name = addForm.querySelector('input[type=text]').value ;
    console.log(name);

    const li = document.createElement('li');
    const todotitle = document.createElement('span')
    const stateBtn=document.createElement('statebtn')
    const deleteBtn=document.createElement('span')
    


    todotitle.textContent = name;
     stateBtn.textContent="Mark Done"
    deleteBtn.textContent = 'delete';

    // add css classes
    todotitle.classList.add('name');

    stateBtn.classList.add('statebtn');


    
    deleteBtn.classList.add('delete');

    li.appendChild(todotitle);
   
    li.appendChild(stateBtn);
  
    li.appendChild(deleteBtn);
    list.appendChild(li)

    console.log(name);
})

var p=localStorage.setItem(`todos${1}`,arr[1].title)
console.log("storge"+localStorage.getItem("todos1"))

todos.forEach((todo) => {
    arr.push(todo.textContent)
    console.log(todo);
})

//localStorage.add("todo")