import PropTypes from "prop-types"
import TaskItem from "./TaskItem"

const TaskList = ({ tasks, deleteTask, editTask }) => {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks found. Add a task to get started!</p>
  }

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
}

export default TaskList
