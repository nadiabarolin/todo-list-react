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
    <section>
      <h2>Iniciar sesión</h2>

      <form onSubmit={manejarLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <label>
          <input
            type="checkbox"
            checked={recordarme}
            onChange={(event) => setRecordarme(event.target.checked)}
          />
          Recordarme
        </label>

        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  )
}

export default Login