import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../header.css'
const Header = () => {
  return (
    <Fragment>
        <nav>
            <div className="nav">
                <Link to="/"><img  className='img' src={logo} alt='logo'/></Link>
            </div>
            <div className="nav2">
                <Link to="/pricing">Pricing</Link>
                <Link to="/product">Product</Link>
                <Link className='login' to="/login">login</Link>
            </div>
        </nav>
       
    </Fragment>
  )
}

export default Header