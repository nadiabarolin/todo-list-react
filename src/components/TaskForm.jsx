
import { useState } from 'react'

function TaskForm({ agregarTarea }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (texto.trim() === '') {
      return
    }

    agregarTarea(texto.trim())

    setTexto('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-4 sm:flex-row sm:items-center"
    >
      <input
        type="text"
        placeholder="Escribí una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="min-w-0 w-full flex-1 rounded-lg border border-purple-light bg-white px-4 py-3 text-night outline-none transition placeholder:text-gray-400 focus:border-purple-dark focus:ring-2 focus:ring-purple-light"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-yellow-accent px-4 py-3 text-sm font-semibold text-night transition hover:opacity-80 sm:w-auto sm:px-6 sm:text-base"
      >
        + Agregar tarea
      </button>
    </form>
  )
}

export default TaskForm