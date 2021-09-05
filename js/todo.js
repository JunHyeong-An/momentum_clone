const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => parseInt(li.id) !== toDo.id);
    saveTodos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodoObj.text;
    
    const btn = document.createElement("button");
    btn.innerHTML = "❌";
    btn.addEventListener("click", deleteTodo);
    li.id = newTodoObj.id;
    li.appendChild(span);
    li.appendChild(btn);
    
    todoList.appendChild(li);
}

function handleToDOSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);    // localStorage can't save array
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDOSubmit);

let savedTodos = ""

if(localStorage.getItem(TODOS_KEY) != "")
    savedTodos= localStorage.getItem(TODOS_KEY);

if(savedTodos != null) {
     const parsedToDos = JSON.parse(savedTodos);
     toDos = parsedToDos;
     parsedToDos.forEach(paintTodo);
}

// if i delete item basicly we made new array
