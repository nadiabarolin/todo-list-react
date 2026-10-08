function TaskItem({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li>
      <span
        style={{
          textDecoration: tarea.completada ? 'line-through' : 'none',
        }}
      >
        {tarea.texto}
      </span>

      <button onClick={() => completarTarea(tarea.texto)}>
        ✔
      </button>

      <button onClick={() => eliminarTarea(tarea.texto)}>
        🗑
      </button>
    </li>
  )
}

export default TaskItem