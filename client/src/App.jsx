import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NoPage  from '../src/components/NoPage'
import { useAuth0 } from '@auth0/auth0-react';
import NoAuth from './components/NoAuth';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import Usuario from './components/Usuario';

function App() {


  const { isAuthenticated } = useAuth0();

  return (

    <>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path ="/catalogo" element={<Catalogo/>}/>
        {isAuthenticated ? 
          <>
            <Route exact path ="/usuario" element={<Usuario/>}/>
            <Route exact path='*' element={<NoPage/>}/> 
          </>
        :
            <Route exact path='/*' element={<NoAuth/>}/>
        }

      </Routes>
    </>
  )
}

export default App
