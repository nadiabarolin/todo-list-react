import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children, mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <div className="app">
      <Navbar
        mostrarRegistro={mostrarRegistro}
        cerrarSesion={cerrarSesion}
        isLoggedIn={isLoggedIn}
      />

      <main className="container">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout