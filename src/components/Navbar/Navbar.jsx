import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='header'>
      <div className='container'>
        <h1>De<span className='primary'>Fi</span></h1>
        <ul className='nav-menu'>
          <li>Home</li>
          <li>Feature</li>
          <li>Earn</li>
          <li>Contact</li>
        </ul>
        <div className='btn-group'>
          <button className='btn'>
            Connect Wallet
          </button>
        </div>
        <div className='hamburger'>
          <FaBars size={20} style={{ color: '#333'}} />
        </div>
      </div>

    </div>
  )
}

export default Navbar