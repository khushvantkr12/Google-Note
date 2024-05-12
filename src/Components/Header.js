import React from 'react'
import logo from './logo.jpg';

export default function Header() {
  return (
    
    <div className='header'>
    <img className='logo' src={logo} alt='logo' width='70' height='50' ></img>
    <h1>Google-Note</h1>
    </div>
  )
}
