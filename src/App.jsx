import React, { useState } from 'react'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import PintarDatos from './components/PintarDatos'

const App = () => {
    
const [nombrePersonaje, setNombrePersonaje] = useState('')


  return (
    <>
      <div className='bg-dark'>
          <h4 className='text-warning p-2 container mb-4'>App Rick and Morty</h4>
      </div>
      <div className='container'>
        
          <Formulario setNombrePersonaje={setNombrePersonaje} />
          <PintarDatos nombrePersonaje={nombrePersonaje} />
        
      </div>
      <Footer />
    </>
  )
}

export default App