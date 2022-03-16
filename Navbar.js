import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
        <>
        
                
            <ul>
                    <Link  className='text-muted' to="/usuariolista"> Suscriptores  </Link>

            </ul>
        </>
  )
}

export default Navbar