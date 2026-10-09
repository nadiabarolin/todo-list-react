
import { useEffect, useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import Login from './components/Login'
import TaskList from './components/TaskList'
import Register from './components/Register/Register'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mostrarRegistro, setMostrarRegistro] = useState(false)
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const sesion = localStorage.getItem('sesion')
    const usuarioGuardado = localStorage.getItem('usuario')

    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado))
    }

    if (sesion === 'activa' && usuarioGuardado) {
      setIsLoggedIn(true)
    }
  }, [])

  function cerrarSesion() {
    setIsLoggedIn(false)
    localStorage.removeItem('sesion')
  }

  function guardarUsuario(email, password) {
    const nuevoUsuario = { email, password }

    setUsuario(nuevoUsuario)
    setMostrarRegistro(false)
  }

  function iniciarSesion() {
    setIsLoggedIn(true)
    setMostrarRegistro(false)
  }

  return (
    <Layout
      mostrarRegistro={() => setMostrarRegistro(true)}
      cerrarSesion={cerrarSesion}
      isLoggedIn={isLoggedIn}
    >
      {isLoggedIn ? (
        <TaskList />
      ) : mostrarRegistro ? (
        <Register
          volverAlLogin={() => setMostrarRegistro(false)}
          guardarUsuario={guardarUsuario}
        />
      ) : (
        <Login
          usuario={usuario}
          iniciarSesion={iniciarSesion}
        />
      )}
    </Layout>
  )
}

export default App