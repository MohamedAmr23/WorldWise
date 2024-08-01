import React, { Fragment } from 'react'
import './App.css'
import './header.css'
import Pricing from './components/pricing/Pricing.jsx'
import Product from './components/product/Product.jsx'
import Login from './components/login/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './Home.jsx'
import Signup from './components/signup/Signup.jsx'
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
    </Routes>
  </Router>
  )
}

export default App