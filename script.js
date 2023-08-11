
// const updateButton = window.document.querySelector(".update-button");
// updateButton.addEventListener('click', (e) => {
//     console.log('Update button clicked');
//     e.preventDefault();

// });


const form = document.querySelector(".my-form");
let list = document.querySelector(".todo-list");
let toDoItem = window.document.querySelector(".form-input");
const button = document.querySelector(".create-button");
let modal = document.querySelector(".modal");

// button.addEventListener("keypress", function (event) {
//     if (event.keyCode === 'Enter') {
//         console.log("rodou")
//       createItem();
//     }
//  });
 function clearList(){

if(confirm("Are you sure?")){
    
    list.innerHTML = "";
}

 }

function triggered(e){
    let element = document.getElementById(e)
    
    element.classList.toggle("li-toggle")
}
function createItem() {
    if (toDoItem.value == '') {
        alert("Enter a valid taks")
    }
    else {
        let item = toDoItem.value;
        let itemId = String(Date.now());
        let li = document.createElement('li');
        li.setAttribute('id', itemId);
        
        li.setAttribute('onclick',"triggered(this.id)")
        li.innerText = item;
        list.appendChild(li);
        toDoItem.value = '';
    }
}



