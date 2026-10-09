
function Navbar({ mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <nav className="flex items-center justify-between bg-purple-dark px-6 py-4 text-white shadow-lg">
      <h1 className="text-xl font-bold">
        📝 Mi Lista de Tareas
      </h1>

      <div className="flex gap-3">
        {isLoggedIn ? (
          <button
            onClick={cerrarSesion}
            className="rounded-lg bg-yellow-accent px-4 py-2 font-semibold text-night transition hover:opacity-80"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={mostrarRegistro}
            className="rounded-lg bg-yellow-accent px-4 py-2 font-semibold text-night transition hover:opacity-80"
          >
            Registrarse
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar