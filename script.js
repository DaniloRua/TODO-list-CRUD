
// const updateButton = window.document.querySelector(".update-button");
// updateButton.addEventListener('click', (e) => {
//     console.log('Update button clicked');
//     e.preventDefault();
  
// });

const form = document.querySelector(".my-form");
let list = document.querySelector(".todo-list");
let toDoItem = window.document.querySelector(".form-input")

function createItem (){
    
    let item= toDoItem.value;
    let itemId = String(Date.now());
    let li = document.createElement('li');
    li.setAttribute('id',itemId);
    li.innerText= item;
    list.appendChild(li);
    toDoItem.value = '';

}



