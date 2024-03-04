import { useState } from 'react'
import Header from './components/Header'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [esPresupuestoValido, setEsPresupuestoValido] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        esPresupuestoValido={esPresupuestoValido}
        setEsPresupuestoValido={setEsPresupuestoValido}
      />
    </div>
  )
}

export default App
