
const form = document.querySelector(".my-form");
let list = document.querySelector(".todo-list");
let toDoItem = window.document.querySelector(".form-input");
const button = document.querySelector(".create-button");


function clearList() {

    if (confirm("Are you sure?")) {
        list.innerHTML = "";
    }
}

function triggered(e) {
    let element = document.getElementById(e);
    element.classList.toggle("li-toggle");
    
}
function dblClick (e){

let input = document.createElement('input', Text)

const element = document.getElementById(e);
console.log(element)
const elementValue = element.innerHTML;

input.innerText= elementValue;

input.setAttribute('value',elementValue)

console.log(input)

element.replaceWith(input);

input.addEventListener('keypress', (e)=>{
    
        if(e.key === 'Enter'){
            let inputValue = input.value;
            
            input.remove();
            element.innerHTML=inputValue;
            
            console.log(element);

            return list.appendChild(element);
        }
    
})

 
}

// function createUpdate(e){
//     let updateButton = document.createElement('button');
//     updateButton.setAttribute('class',"update-button");
//     updateButton.setAttribute('id',e);
    
//     return updateButton
// }

function createItem() {
    if (toDoItem.value == '') {
        alert("Enter a valid task")
    }
    else {
        let item = toDoItem.value;
        let itemId = String(Date.now());
        let li = document.createElement('li');
        li.setAttribute('id', itemId);
        li.setAttribute('onclick', "triggered(this.id)");
        li.setAttribute('ondblclick', "dblClick(this.id)")
        li.innerText = item;
        // let updateButton = createUpdate(itemId);
        // li.appendChild(updateButton)
        list.appendChild(li);
        toDoItem.value = '';

    }
}



// button.addEventListener("keypress", function (event) {
//     if (event.keyCode == 'Enter') {
//         console.log("rodou")
//       createItem();
//     }
//  });