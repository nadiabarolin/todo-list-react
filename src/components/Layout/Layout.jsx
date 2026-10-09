
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children, mostrarRegistro, cerrarSesion, isLoggedIn }) {
  return (
    <div className="app flex min-h-screen flex-col">
      <Navbar
        mostrarRegistro={mostrarRegistro}
        cerrarSesion={cerrarSesion}
        isLoggedIn={isLoggedIn}
      />

      <main className="container mx-auto w-full flex-1 px-4 py-6 pb-16 sm:px-6 sm:pb-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout