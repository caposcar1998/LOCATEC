import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Catalogo from './Catalogo'
import Header from './components/Header'
import NoPage from './components/NoPage'
import { Home } from './Home'




function App() {


  return (
    <>
      <Header/>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="catalogo" element={<Catalogo />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  )
}

export default App
