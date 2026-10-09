function Navbar({ mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <nav className="navbar">
      <h1>📝 Mi Lista de Tareas</h1>

      <div className="navbar-buttons">
        {isLoggedIn ? (
          <button onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        ) : (
          <button onClick={mostrarRegistro}>
            Registrarse
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar