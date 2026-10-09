
import { useState } from 'react'

function Register({ volverAlLogin, guardarUsuario }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function manejarRegistro(event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    const nuevoUsuario = {
      email: email.trim(),
      password,
    }

    localStorage.setItem('usuario', JSON.stringify(nuevoUsuario))
    guardarUsuario(nuevoUsuario.email, nuevoUsuario.password)

    alert('Registro exitoso')
    volverAlLogin()
  }

  return (
    <section className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-2 text-center text-3xl font-bold text-purple-dark">
        ¡Creá tu cuenta!
      </h2>

      <p className="mb-6 text-center text-gray-600">
        Organizá tus tareas de una manera sencilla.
      </p>

      <form onSubmit={manejarRegistro} className="flex flex-col gap-4">
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
            placeholder="Creá una contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded-lg border border-purple-light px-4 py-3 outline-none focus:border-purple-dark focus:ring-2 focus:ring-lavender"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium text-night">
            Confirmar contraseña
          </label>
          <input
            type="password"
            placeholder="Repetí la contraseña"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
            className="w-full rounded-lg border border-purple-light px-4 py-3 outline-none focus:border-purple-dark focus:ring-2 focus:ring-lavender"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-yellow-accent px-4 py-3 font-semibold text-night transition hover:opacity-80"
        >
          Registrarme
        </button>

        <button
          type="button"
          onClick={volverAlLogin}
          className="rounded-lg border border-purple-light px-4 py-3 font-semibold text-purple-dark transition hover:bg-lavender"
        >
          Volver a iniciar sesión
        </button>
      </form>
    </section>
  )
}

export default Register