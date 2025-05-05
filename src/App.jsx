"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentTask, setCurrentTask] = useState(null)

  const API_URL = import.meta.env.PROD
    ? "/api/task" 
    : "http://localhost:3000/api/task" 

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${API_URL}/getAll-task`)
      setTasks(response.data)
    } catch (error) {
      console.error("Error fetching tasks:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const addTask = async (task) => {
    try {
      const response = await axios.post(`${API_URL}/create-task`, task)
      setTasks([...tasks, response.data])
      fetchTasks()
    } catch (error) {
      console.error("Error adding task:", error)
    }
  }

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${API_URL}/update-tasks/${id}`, updatedTask)
      setTasks(tasks.map((task) => (task._id === id ? response.data : task)))
      setCurrentTask(null)
    } catch (error) {
      console.error("Error updating task:", error)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/delete-tasks/${id}`)
      setTasks(tasks.filter((task) => task._id !== id))
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  const editTask = (task) => {
    setCurrentTask(task)
  }

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} currentTask={currentTask} updateTask={updateTask} />
      {isLoading ? <p>Loading tasks...</p> : <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />}
    </div>
  )
}

export default App
