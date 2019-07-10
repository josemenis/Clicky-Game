import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar (props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <h1 className='title'>{props.children}</h1>
    </nav>
  )
}
export default Navbar
