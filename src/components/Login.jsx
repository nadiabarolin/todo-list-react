
import { useState } from 'react'

function Login({ usuario, iniciarSesion }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [recordarme, setRecordarme] = useState(false)

  function manejarLogin(event) {
    event.preventDefault()

    if (!usuario) {
      alert('Primero tenés que registrarte')
      return
    }

    if (
      email === usuario.email &&
      password === usuario.password
    ) {
      if (recordarme) {
        localStorage.setItem('sesion', 'activa')
      } else {
        localStorage.removeItem('sesion')
      }

      iniciarSesion()
    } else {
      alert('Correo o contraseña incorrectos')
    }
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-2 text-center text-3xl font-bold text-purple-dark">
        ¡Hola de nuevo!
      </h2>

      <p className="mb-6 text-center text-gray-600">
        Iniciá sesión para organizar tus tareas.
      </p>

      <form onSubmit={manejarLogin} className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block font-medium text-night">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded-lg border border-purple-light px-4 py-3 outline-none focus:border-purple-dark focus:ring-2 focus:ring-lavender"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-night">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded-lg border border-purple-light px-4 py-3 outline-none focus:border-purple-dark focus:ring-2 focus:ring-lavender"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={recordarme}
            onChange={(event) => setRecordarme(event.target.checked)}
            className="accent-purple-dark"
          />
          Recordarme
        </label>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-purple-dark px-4 py-3 font-semibold text-white transition hover:bg-purple-light hover:text-purple-dark"
        >
          Iniciar sesión
        </button>
      </form>
    </section>
  )
}

export default Login