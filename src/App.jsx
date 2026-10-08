import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskFilter from './components/TaskFilter'

function App() {
  return (
    <>
      <h1>Mi lista de tareas</h1>
      <p>Organizá tus tareas y mantené todo al día.</p>

      <TaskForm />
      <TaskFilter />
      <TaskList />
    </>
  )
}

export default App