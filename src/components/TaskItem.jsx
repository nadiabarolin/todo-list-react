function TaskItem({tarea, completarTarea}) {
  return (
    <li> 
    <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none', }} > {tarea.texto} </span> 
    <button onClick={() => completarTarea(tarea.texto)}> ✔ </button> 
    <button>🗑</button> 
    </li>
  )
}

export default TaskItem