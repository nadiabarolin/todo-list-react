import TaskItem from './TaskItem'

function TaskList() {
  return (
    <section>
      <h2>Mis tareas</h2>

      <ul>
        <TaskItem />
        <TaskItem />
      </ul>
    </section>
  )
}

export default TaskList