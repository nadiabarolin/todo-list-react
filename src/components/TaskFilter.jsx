function TaskFilter() {
  return (
    <div>
      <label htmlFor="filtro">Filtrar tareas:</label>

      <select id="filtro">
        <option value="todas">Todas</option>
        <option value="completadas">Completadas</option>
        <option value="pendientes">Pendientes</option>
      </select>
    </div>
  )
}

export default TaskFilter