import React from 'react'
import { Outlet, Route , Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SIgnIn'
import { useAuthContext } from '../contexts'
import Navbar from '../components/Navbar/Navbar'
import NavbarPrivate from '../components/Navbar/NavbarPrivate'



const ConnectRouter = () => {
  const {token} = useAuthContext()
  return (
    <Routes>
        <Route path='/signup'  element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/' element={
          <>
          {!!token === true ? <NavbarPrivate/> : <Navbar/>}
          <Home/>
          </>
        }/>
    </Routes>
  )
}

export default ConnectRouter