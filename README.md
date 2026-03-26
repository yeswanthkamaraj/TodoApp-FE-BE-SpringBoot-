# 📝 Full Stack Todo Application

A fully functional **Todo Management Application** built using **Spring Boot (Backend)** and **HTML, CSS, JavaScript (Frontend)**.
This project demonstrates end-to-end development with REST APIs and dynamic UI interaction.

---

## 📌 Overview

This application allows users to manage their daily tasks efficiently by performing CRUD operations through a user-friendly interface.

The frontend communicates with the backend using REST APIs, making the application scalable and easy to extend.

---

## 🛠️ Tech Stack

### 🔹 Backend

* **Java**
* **Spring Boot**
* **Spring Data JPA**
* **REST APIs**
* **MySQL / H2 Database**

### 🔹 Frontend

* **HTML**
* **CSS**
* **JavaScript (DOM Manipulation & Fetch API)**

---

## ⚙️ Features

✔️ Add new tasks
✔️ View all tasks
✔️ Update task status (complete/incomplete)
✔️ Delete tasks
✔️ Responsive UI
✔️ REST API integration

---

## 📂 Project Structure

```id="98zuvy"
todo-app/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   └── entity/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── pom.xml
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/todo`      | Get all tasks     |
| POST   | `/api/todo`      | Create a new task |
| PUT    | `/api/todo/{id}` | Update a task     |
| DELETE | `/api/todo/{id}` | Delete a task     |

---

## ▶️ How to Run

### 1️⃣ Start Backend

```id="8z7z3q"
cd backend
mvn spring-boot:run
```

### 2️⃣ Open Frontend

```id="ljw4cp"
Open index.html in browser
```

---

## 🌐 Application Flow

User → Frontend (HTML/CSS/JS) → REST API → Spring Boot Backend → Database

---

## 💡 Key Learnings

* Built RESTful APIs using Spring Boot
* Integrated frontend with backend using Fetch API
* Practiced DOM manipulation and event handling
* Implemented full CRUD functionality
* Understood client-server architecture

---

## 🚀 Future Enhancements

* 🔐 User Authentication (JWT)
* 🌐 Deploy frontend & backend (Netlify + Render/AWS)
* 📱 Convert into React application
* 🔔 Add notifications/reminders

---

## 👨‍💻 Author

**Yeswanth K**

* 💼 Software Engineer
* 🧠 Passionate about Full Stack & Backend Development

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
