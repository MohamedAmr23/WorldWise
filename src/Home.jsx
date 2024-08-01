import React from 'react'
import './App.css'
import Pricing from './components/pricing/Pricing.jsx'
import Product from './components/product/Product.jsx'
import Login from './components/login/Login.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Header from './components/Header.jsx';

const Home = () => {
  return (

    <div>
        <main>
            <div className="navbar">
                <Header/>
            </div>
            <div className="middle">
                    <h4>You travel the world.<br/>WorldWise keeps track of your adventures.</h4>
                    <p>A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.
                    </p>
                    <Link className='middleButton' to="/login">get started</Link>
                </div>
        </main>
    </div>

  )
}

export default Home