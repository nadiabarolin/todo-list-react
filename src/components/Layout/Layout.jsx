
function Layout({ children, mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <div className="app">
      <header>
        <h1>Mi lista de tareas</h1>

        {isLoggedIn ? (
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        ) : (
          <button onClick={mostrarRegistro}>Registrarse</button>
        )}
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>Mi lista de tareas</p>
      </footer>
    </div>
  )
}

export default Layout