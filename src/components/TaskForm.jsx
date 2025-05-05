"use client"

import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("medium")
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title)
      setDescription(currentTask.description || "")
      setPriority(currentTask.priority || "medium")
    }
  }, [currentTask])

  const validateForm = () => {
    const newErrors = {}
    if (!title.trim()) {
      newErrors.title = "Title is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const taskData = {
      title,
      description,
      priority,
    }

    if (currentTask) {
      updateTask(currentTask._id, taskData)
    } else {
      addTask(taskData)
    }

    
    setTitle("")
    setDescription("")
    setPriority("medium")
  }

  return (
    <div className="task-form-container">
      <h2>{currentTask ? "Edit Task" : "Add New Task"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={errors.title ? "error" : ""}
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="btn">
          {currentTask ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  )
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  currentTask: PropTypes.object,
}

export default TaskForm
