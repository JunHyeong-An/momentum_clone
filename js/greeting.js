const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const todoAsk = document.querySelector("#todoAsk");

function login(name) {
    localStorage.setItem("name", name);
    greeting.innerHTML = `Hello, ${localStorage.getItem("name")}`;
    formHandler(name);
}

function formHandler() {
    const name = localStorage.getItem("name");

    if(name != "") {
        loginForm.classList.add("hidden");
        todoForm.classList.remove("hidden");
        todoAsk.classList.remove("hidden");
    }
}

function handleLoginFormSubmit(event) {
    const name = loginInput.value;
    event.preventDefault();
    login(name);
}

loginForm.addEventListener("submit", handleLoginFormSubmit);

if(localStorage.getItem("name") != null) {
    formHandler(localStorage.getItem("name"));
    greeting.innerHTML = `Hello, ${localStorage.getItem("name")}`;
}
else greeting.innerHTML = "Hello!! What's your name?";