import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'

function TaskList() {
  const [tareas, setTareas] = useState([])

  function agregarTarea(texto) {
    const nuevaTarea = {
      texto: texto,
      completada: false,
    }

    setTareas([...tareas, nuevaTarea])
  }

  function completarTarea(textoTarea) {
    const nuevasTareas = tareas.map((tarea) => {
      if (tarea.texto === textoTarea) {
        return {
          ...tarea,
          completada: true,
        }
      }

      return tarea
    })

    setTareas(nuevasTareas)
  }

  return (
    <section>
      <h2>Mis tareas</h2>

      <TaskForm agregarTarea={agregarTarea} />

      <ul>
        {tareas.map((tarea) => (
          <TaskItem
            key={tarea.texto}
            tarea={tarea}
            completarTarea={completarTarea}
          />
        ))}
      </ul>
    </section>
  )
}

export default TaskList

