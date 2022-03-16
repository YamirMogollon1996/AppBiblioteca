import React, { useContext } from 'react'
import { Contexto } from './ContextGlobal'
import Navbar from './Navbar'


const Headers = () => {

   const {   estado   , administradores ,  islooger , setislloger} = useContext(Contexto)

  return (
     <div  className='container-fluid bg-dark p-3 mb-5 d-flex justify-content-around align-items-center '>
        <p className='text-white'> Administrador Biblioteca</p>
        
        {islooger &&  <div className='d-flex  grande justify-content-between align-items-center'>

         <h3 className='text-warning' >{ "Usuario"  + " :" +  islooger[0].usuario + "  :" +"empresa" }</h3>
         <button  onClick={()=>setislloger(false)} className='btn btn-outline-warning' >Cerrar Session</button> 
         
           </div>}
           
     </div>
  )
}

export default Headers