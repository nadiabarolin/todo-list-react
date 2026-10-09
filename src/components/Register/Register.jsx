
import { useState } from 'react'

function Register({ volverAlLogin, guardarUsuario }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function manejarRegistro(event) {
    event.preventDefault()

    if (
      email.trim() === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('Completá todos los campos')
      return
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    const nuevoUsuario = {
      email: email.trim(),
      password: password,
    }

    localStorage.setItem('usuario', JSON.stringify(nuevoUsuario))

    guardarUsuario(nuevoUsuario.email, nuevoUsuario.password)

    alert('Registro exitoso')
    volverAlLogin()
  }

  return (
    <section>
      <h2>Registrarse</h2>

      <form onSubmit={manejarRegistro}>
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

        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />

        <button type="submit">Registrarse</button>
        <button type="button" onClick={volverAlLogin}>
          Volver a iniciar sesión
        </button>
      </form>
    </section>
  )
}

export default Register