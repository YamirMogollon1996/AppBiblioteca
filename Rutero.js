import React from 'react'
import { Link } from 'react-router-dom'


const Rutero = () => {
  return (
        
    <ul>

            <Link  to="/login" >Login</Link>
            <Link to="/home"> Home </Link>
            <Link  to="/about" >About</Link>

    </ul>


    
  )
}

export default Rutero