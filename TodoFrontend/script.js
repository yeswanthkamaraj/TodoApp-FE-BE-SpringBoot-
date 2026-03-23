// Shared script for login, register, and todos pages
const SERVER_URL = "http://localhost:8080";
const token = localStorage.getItem("token");

// Login page logic
function login() {
 const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 fetch(`${SERVER_URL}/auth/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
 })
 .then(response => {
 
    if (!response.ok) {
      throw new (data.message || "Login failed");
    } return response.json();
        })
        .then(data => {
            localStorage.setItem("token", data.token);
            Window.location.href = "todos.html";
        })
        .catch(error => {
            alert("An error occurred during login");
        })
    
 
}

// Register page logic
function register() {
const email=document.getElementById("email").value;
 const password=document.getElementById("password").value;
 fetch(`${SERVER_URL}/auth/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
 })
 .then(response => response.json())
 
    if (response.ok) {
       alert("register successful,please login");
       window.location.href = "login.html";
    } else {
        return response.json().then(data => {
            alert(data.message || "Registration failed");
        }).catch(error => {
            alert("An error occurred during registration");
        });
    }
}

// Todos page logic
function createTodoCard(todo) {
 const  card = document.createElement("div");
 card.className = "todo-card";

 const checkbox = document.createElement("input");
 checkbox.type = "checkbox"; 
 checkbox.checked = todo.isCompleted;
    checkbox.addEventListener("change", function () {
        const updatedTodo = { ...todo, isCompleted: checkbox.checked };
        updateTodoStatus(updatedTodo);
    });
    const span=document.createElement("span");
    span.textContent=todo.title;
    
    if(todo.isCompleted){
        span.style.textDecoration="line-through";
        span.style.color="gray";
    }   
    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.onclick=function(){
        deleteTodo(todo.id);
    }
    card.appendChild(checkbox);
    card.appendChild(span);
    card.appendChild(deleteButton);
    return card;
}

function loadTodos() {
    if(!token){
        alert("Please login to view your todos");
        window.location.href = "login.html";
        return;
    }
    fetch(`${SERVER_URL}/api/v1/todo/`, {
    method: "GET",
    headers: {"Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ title:todoText, isCompleted: false })

 })
 .then(response => {
 
    if (!response.ok) {
      throw new (data.message || " failed to get todo");
    } return response.json();
        })
        .then((todos)=> {
            const todoList = document.getElementById("todo-list");
            todoList.innerHTML = "";
            if(!todos || todos.length === 0) {
                todoList.innerHTML = '<p id="empty-message">No todos found.</p>';
            } else {
                todos.forEach(todo => {
                    const card = createTodoCard(todo);
                    todoList.appendChild(card);
                });
            }
        })
        .catch(error => {
            alert("An error occurred during update");
            document.getElementById("todo-list").innerHTML = '<p id="empty-message">Failed to load todos.</p>';
        })

}

function addTodo() {
    const input = document.getElementById("new-todo");
    const title = input.value.trim();
  

fetch(`${SERVER_URL}/api/v1/todo/`, {
    method: "POST",
    headers: {"Content-Type": "application/json","Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({ title:todoText, isCompleted: false })

 })
 .then(response => {
 
    if (!response.ok) {
      throw new (data.message || " failed to update todo");
    } return response.json();
        })
        .then((newTodo)=>
            input.value = "",
            loadTodos())
        .catch(error => {
            alert("An error occurred during update");
        })
}

function updateTodoStatus(todo) {
fetch(`${SERVER_URL}/api/v1/todo/`, {
    method: "PUT",
    headers: {"Content-Type": "application/json","Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(todo)

 })
 .then(response => {
 
    if (!response.ok) {
      throw new (data.message || " failed to update todo");
    } return response.json();
        })
        .then(()=>loadTodos())
        .catch(error => {
            alert("An error occurred during update");
        })
    
}

function deleteTodo(id) {
fetch(`${SERVER_URL}/api/v1/todo/${id}`, {
    method: "DELETE",
    headers: {"Authorization": `Bearer ${token}`
    },

 })
 .then(response => {
 
    if (!response.ok) {
      throw new (data.message || " failed to delete todo");
    } return response.text();
        })
        .then(()=>loadTodos())
        .catch(error => {
            alert("An error occurred during deletion");
        })
    
 
}

// Page-specific initializations
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("todo-list")) {
        loadTodos();
    }
});
