import React from 'react'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import FuncionalidadesPrincipales from './components/FuncionalidadesPrincipales.jsx'
import NoticiasDestacados from './components/NoticiasDestacados.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <FuncionalidadesPrincipales />
      <NoticiasDestacados />
    </div>
  )
}

export default App
