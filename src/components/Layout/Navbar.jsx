
function Navbar({ mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <nav className="flex items-center justify-between gap-3 bg-purple-dark px-3 py-4 text-white shadow-lg sm:px-6">
      <h1 className="text-base font-bold sm:text-xl">
        📝 Mi Lista de Tareas
      </h1>

      <div className="flex shrink-0 gap-2 sm:gap-3">
        {isLoggedIn ? (
          <button
            onClick={cerrarSesion}
            className="rounded-lg bg-yellow-accent px-3 py-2 text-sm font-semibold text-night transition hover:opacity-80 sm:px-4 sm:text-base"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={mostrarRegistro}
            className="rounded-lg bg-yellow-accent px-3 py-2 text-sm font-semibold text-night transition hover:opacity-80 sm:px-4 sm:text-base"
          >
            Registrarse
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar