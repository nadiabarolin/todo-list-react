
function TaskFilter({ filtro, setFiltro }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <label
        htmlFor="filtro"
        className="font-semibold text-purple-dark"
      >
        Filtrar tareas:
      </label>

      <select
        id="filtro"
        value={filtro}
        onChange={(event) => setFiltro(event.target.value)}
        className="w-full cursor-pointer rounded-lg border border-purple-light bg-white px-4 py-3 text-night outline-none transition focus:border-purple-dark focus:ring-2 focus:ring-lavender sm:w-auto"
      >
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  )
}

export default TaskFilter