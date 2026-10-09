
function TaskItem({ tarea, completarTarea, eliminarTarea }) {
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-purple-light bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <span
        className={`min-w-0 flex-1 break-words text-night ${
          tarea.completada
            ? 'text-gray-400 line-through'
            : 'font-medium'
        }`}
      >
        {tarea.texto}
      </span>

      <div className="flex w-full gap-2 sm:w-auto">
        <button
          type="button"
          onClick={() => completarTarea(tarea.texto)}
          disabled={tarea.completada}
          aria-label="Completar tarea"
          title="Completar tarea"
          className="flex-1 rounded-lg bg-purple-dark px-2 py-2 text-sm font-semibold text-white transition hover:bg-purple-light hover:text-purple-dark disabled:cursor-not-allowed disabled:opacity-50 sm:flex-none sm:px-4 sm:text-base"
        >
          ✔ Completar
        </button>

        <button
          type="button"
          onClick={() => eliminarTarea(tarea.texto)}
          aria-label="Eliminar tarea"
          title="Eliminar tarea"
          className="flex-1 rounded-lg bg-yellow-accent px-2 py-2 text-sm font-semibold text-night transition hover:opacity-80 sm:flex-none sm:px-4 sm:text-base"
        >
          🗑 Eliminar
        </button>
      </div>
    </li>
  )
}

export default TaskItem