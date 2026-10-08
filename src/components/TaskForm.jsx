import { useState } from 'react'

function TaskForm({ agregarTarea }) {
  const [texto, setTexto] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (texto.trim() === '') {
      return
    }

    agregarTarea(texto)

    setTexto('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribí una tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  )
}

export default TaskForm