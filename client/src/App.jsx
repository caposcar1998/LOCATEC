import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Catalogo from './Catalogo'
import CreateProduct from './CreateProduct'
import CreateUser from './CreateUser'
import NoPage from './components/NoPage'
import { Home } from './Home'




function App() {


  return (
    <>
      
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="catalogo" element={<Catalogo />} />
            <Route exact path="createProduct" element={<CreateProduct />} />
            <Route exact path="createUser" element={<CreateUser />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    </>
  )
}

export default App
