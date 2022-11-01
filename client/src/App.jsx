import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NoPage  from '../src/components/NoPage'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function App() {


  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
  useAuth0();

  return (
    <Routes>
      <Route exact path="/" element={
        isAuthenticated ?
        <button onClick={() => logout({ returnTo: window.location.origin })}></button>
        :
        <button onClick={loginWithRedirect}>Log in</button>
      }/>
      {user ? 
        <>
              <Route exact path='*' element={<NoPage/>}/> 
            </> 
      :
          <Route exact path='/algo' element={<NoPage/>}/>
      }

    </Routes>
  )
}

export default App
