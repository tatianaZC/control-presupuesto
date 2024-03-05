import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {

	const [presupuesto, setPresupuesto] = useState(0)
	const [esPresupuestoValido, setEsPresupuestoValido] = useState(false)
	
	const [modal, setModal] = useState(false)
	const [animarModal, setAnimarModal] = useState(false)

	const handleNuevoGasto = () => {
		setModal(true)

		setTimeout(() => {
			setAnimarModal(true)
		}, 3000)
	}

	return (
		<div>
			<Header
				presupuesto={presupuesto}
				setPresupuesto={setPresupuesto}
				esPresupuestoValido={esPresupuestoValido}
				setEsPresupuestoValido={setEsPresupuestoValido}
			/>

			{esPresupuestoValido && (
				<div className='nuevo-gasto'>
					<img
						src={IconoNuevoGasto}
						alt="icono nuevo gasto"
						onClick={handleNuevoGasto}
					/>
				</div>
			)}

			{modal && <Modal
						setModal={setModal}
						animarModal={animarModal}
					/>}
		</div>
	)
}

export default App
