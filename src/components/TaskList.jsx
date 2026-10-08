import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import TaskFilter from './TaskFilter'

function TaskList() {
  const [tareas, setTareas] = useState([])
  const [filtro, setFiltro] = useState('todas')

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

  function eliminarTarea(textoTarea) {
    const nuevasTareas = tareas.filter(
      (tarea) => tarea.texto !== textoTarea
    )

    setTareas(nuevasTareas)
  }

  const tareasFiltradas = tareas.filter((tarea) => {
  if (filtro === 'completadas') {
    return tarea.completada
  }

  if (filtro === 'pendientes') {
    return !tarea.completada
  }

  return true
})

  return (
    <section>
      <h2>Mis tareas</h2>

      <TaskForm agregarTarea={agregarTarea} />

      <TaskFilter filtro={filtro} setFiltro={setFiltro} />

      <ul>
        {tareasFiltradas.map((tarea) => (
          <TaskItem
            key={tarea.texto}
            tarea={tarea}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ul>
    </section>
  )
}

export default TaskList