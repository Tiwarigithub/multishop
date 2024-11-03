import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Food from './pages/Food';
import Grocery from './pages/Grocery';
import SignUp from './pages/SignUp';



function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
      <Route path='/Food' element={<Food/>}/>
      <Route path='/Grocery' element={<Grocery/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
