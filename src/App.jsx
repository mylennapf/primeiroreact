import { useState } from 'react'
import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'

function App() {
  return (
    <main>
      <header>
        <img src="/tecboardlogo.png" alt='' />
      </header>
      <section className='hero-section'>
         <img src="/tecboardheader.png" alt=''/>
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
  