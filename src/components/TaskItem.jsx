"use client"

import PropTypes from "prop-types"

const TaskItem = ({ task, deleteTask, editTask }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case "high":
        return "priority-high"
      case "medium":
        return "priority-medium"
      case "low":
        return "priority-low"
      default:
        return ""
    }
  }

  return (
    <div className={`task-item ${getPriorityClass(task.priority)}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span className="task-priority">Priority: {task.priority}</span>
      </div>
      <div className="task-actions">
        <button onClick={() => editTask(task)} className="btn btn-edit">
          Edit
        </button>
        <button onClick={() => deleteTask(task._id)} className="btn btn-delete">
          Delete
        </button>
      </div>
    </div>
  )
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
}

export default TaskItem
