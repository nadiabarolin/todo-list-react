import { useEffect, useState } from 'react'
import Layout from './components/Layout/Layout'
import Login from './components/Login'
import TaskList from './components/TaskList'
import Register from './components/Register/Register'
import Toast from './components/Toast'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mostrarRegistro, setMostrarRegistro] = useState(false)
  const [usuario, setUsuario] = useState(null)
  const [toast, setToast] = useState({
    mensaje: '',
    tipo: 'info',
  })

  function mostrarToast(mensaje, tipo = 'info') {
    setToast({ mensaje, tipo })
  }

  function cerrarToast() {
    setToast({ mensaje: '', tipo: 'info' })
  }

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
    mostrarToast('Cerraste sesión correctamente.', 'info')
  }

  function guardarUsuario(email, password) {
    const nuevoUsuario = { email, password }

    setUsuario(nuevoUsuario)
    setMostrarRegistro(false)
    mostrarToast('¡Registro exitoso! Ya podés iniciar sesión.', 'exito')
  }

  function iniciarSesion() {
    setIsLoggedIn(true)
    setMostrarRegistro(false)
    localStorage.setItem('sesion', 'activa')
    mostrarToast('¡Bienvenida/o! Iniciaste sesión correctamente.', 'exito')
  }

  return (
    <>
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
            mostrarToast={mostrarToast}
          />
        ) : (
          <Login
            usuario={usuario}
            iniciarSesion={iniciarSesion}
            mostrarToast={mostrarToast}
          />
        )}
      </Layout>

      <Toast
        mensaje={toast.mensaje}
        tipo={toast.tipo}
        cerrar={cerrarToast}
      />
    </>
  )
}

export default App