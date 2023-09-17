const form = document.querySelector(".my-form");
let list = document.querySelector(".todo-list");
let toDoItem = window.document.querySelector(".form-input");
const button = document.querySelector(".create-button");

// Load items from local storage when the page loads
window.addEventListener('load', () => {
    const savedItems = JSON.parse(localStorage.getItem('todoItems')) || [];
    savedItems.forEach(item => {
        createItem(item);
    });
});

function clearList() {
    if (confirm("Are you sure?")) {
        list.innerHTML = "";
        localStorage.removeItem('todoItems');
    }
}

function triggered(e) {
    let element = document.getElementById(e);
    element.classList.toggle("li-toggle");
    saveItemsToLocalStorage();
}

function dblClick(e) {
    let input = document.createElement('input');
    const element = document.getElementById(e);
    const elementValue = element.innerHTML;
    input.value = elementValue;
    element.replaceWith(input);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            let inputValue = input.value;
            input.remove();
            element.innerHTML = inputValue;
            list.appendChild(element);
            saveItemsToLocalStorage();
        }
    });
}

function createItem(value) {
    let item = value || toDoItem.value;
    if (item == '') {
        alert("Enter a valid task");
        return;
    }

    let itemId = String(Date.now());
    let li = document.createElement('li');
    li.setAttribute('id', itemId);
    li.setAttribute('onclick', "triggered(this.id)");
    li.setAttribute('ondblclick', "dblClick(this.id)");
    li.innerText = item;
    list.appendChild(li);

    // Clear the input field if a value was provided
    if (value) {
        toDoItem.value = '';
    }

    saveItemsToLocalStorage();
}

function saveItemsToLocalStorage() {
    const items = Array.from(list.children).map(li => li.innerText);
    localStorage.setItem('todoItems', JSON.stringify(items));
}

toDoItem.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        createItem();
    }
});
