
import { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import TaskFilter from './TaskFilter'

function TaskList() {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas')
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : []
  })

  const [filtro, setFiltro] = useState('todas')

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

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
    <section className="mx-auto mt-6 w-full max-w-3xl rounded-2xl bg-white p-4 shadow-xl sm:mt-10 sm:p-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-purple-dark">
          Mis tareas 📝
        </h2>

        <p className="mt-2 text-gray-600">
          Organizá tus pendientes y celebrá cada tarea terminada.
        </p>
      </div>

      <div className="rounded-xl bg-lavender p-4 sm:p-5">
        <TaskForm agregarTarea={agregarTarea} />
      </div>

      <div className="my-6">
        <TaskFilter filtro={filtro} setFiltro={setFiltro} />
      </div>

      {tareasFiltradas.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-purple-light p-8 text-center">
          <p className="text-lg font-semibold text-purple-dark">
            Todavía no hay tareas por acá.
          </p>

          <p className="mt-2 text-gray-600">
            Agregá una tarea o probá con otro filtro.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {tareasFiltradas.map((tarea) => (
            <TaskItem
              key={tarea.texto}
              tarea={tarea}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </ul>
      )}

      <p className="mt-6 text-right text-sm text-gray-500">
        {tareas.length} {tareas.length === 1 ? 'tarea creada' : 'tareas creadas'}
      </p>
    </section>
  )
}

export default TaskList