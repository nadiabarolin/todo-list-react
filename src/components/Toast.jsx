import { useEffect } from 'react'

function Toast({ mensaje, tipo = 'exito', cerrar }) {
  useEffect(() => {
    if (!mensaje) return

    const temporizador = setTimeout(() => {
      cerrar()
    }, 3500)

    return () => clearTimeout(temporizador)
  }, [mensaje, cerrar])

  if (!mensaje) return null

  const estilos = {
    exito: {
      icono: '✓',
      color: 'border-green-500',
      iconoColor: 'bg-green-100 text-green-700',
    },
    error: {
      icono: '!',
      color: 'border-red-500',
      iconoColor: 'bg-red-100 text-red-700',
    },
    info: {
      icono: 'i',
      color: 'border-purple-light',
      iconoColor: 'bg-lavender text-purple-dark',
    },
  }

  const estilo = estilos[tipo] || estilos.info

  return (
    <div
      role="alert"
      className={`fixed right-4 top-4 z-50 flex w-[calc(100%-2rem)] max-w-sm items-center gap-3 rounded-xl border-l-4 ${estilo.color} bg-white p-4 text-night shadow-xl`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-bold ${estilo.iconoColor}`}
      >
        {estilo.icono}
      </span>

      <p className="flex-1 text-sm font-medium sm:text-base">
        {mensaje}
      </p>

      <button
        type="button"
        onClick={cerrar}
        aria-label="Cerrar aviso"
        className="rounded px-2 py-1 text-lg text-gray-500 transition hover:bg-gray-100"
      >
        ×
      </button>
    </div>
  )
}

export default Toast