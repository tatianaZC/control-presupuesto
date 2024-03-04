import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    presupuesto, 
    setPresupuesto, 
    esPresupuestoValido, 
    setEsPresupuestoValido
}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {esPresupuestoValido ? (
            <ControlPresupuesto
            presupuesto={presupuesto}
            />
        ) : (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setEsPresupuestoValido={setEsPresupuestoValido}
        />
        )}
        
    </header>
  )
}

export default Header