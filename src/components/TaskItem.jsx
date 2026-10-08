function TaskItem({tarea}) {
  return (
    <li>
      <span>{tarea}</span>

      <button>✔</button>
      <button>🗑</button>
    </li>
  )
}

export default TaskItem