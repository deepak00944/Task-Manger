# 📝 Task Manager Application

A full-stack Task Manager web application that allows users to add, update, delete, and prioritize tasks. The backend is built using **Node.js**, **Express**, and **MongoDB**, while the frontend is built using **React (Vite)** and styled with **Tailwind CSS**.

---

## 🔗 Live Links

- **Frontend (Vercel)**: https://task-manger-frontend-eight.vercel.app/  
- **Backend (Render)**: https://backend-zlnc.onrender.com/api/task


---

## 🚀 Features

- ✅ Add new tasks with title, description, and priority
- 📝 Edit or update existing tasks
- 🗑️ Delete tasks
- 📌 Set task priority (High, Medium, Low)
- 🔁 Tasks persist across refresh using MongoDB
- ⚙️ Fully connected backend API with frontend

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

---

## 🧪 API Endpoints

Base URL: `https://backend-zlnc.onrender.com/api/task`

| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| GET    | `/getAll-task`       | Get all tasks         |
| POST   | `/create-task`       | Create a new task     |
| PUT    | `/update-task/:id`   | Update a task         |
| DELETE | `/delete-task/:id`   | Delete a task         |

---


