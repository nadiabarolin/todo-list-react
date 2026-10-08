import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

function TaskList() {
  const [tareas, setTareas] = useState([])

  function agregarTarea(nuevaTarea) {
    setTareas([...tareas, nuevaTarea])
  }

  return (
    <section>
      <h2>Mis tareas</h2>

      <TaskForm agregarTarea={agregarTarea} />

      <ul>
        {tareas.map((tarea) => (
          <TaskItem
            key={tarea}
            tarea={tarea}
          />
        ))}
      </ul>
    </section>
  )
}

export default TaskList