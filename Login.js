import React, { useContext, useState } from 'react'
import login from "./asset/login.svg"
import { Contexto } from './ContextGlobal'
import { useNavigate , Navigate } from "react-router-dom"

const initalUser ={
  usuario:"",
  contrasenia:""
}
const Login = () => {

  const navigate =  useNavigate()
  const {   estado   , administradores ,  islooger , setislloger} = useContext(Contexto)
  const [text , settext] =  useState(initalUser)

  const HandleOnsubmit = (e)=>{
    
    e.preventDefault()  
    const admi =  administradores.filter(item => item.usuario === text.usuario && item.contrasenia === text.contrasenia)
    setislloger(admi)
    console.log(admi)

    admi.length === 1  ? navigate("/home") : navigate("/about")
    
  }

  const HadnldeClicerChangue = (e)=>{
      settext({
          ... text , 
        [e.target.name]:e.target.value
      })


  }
  return (

    <>    

        <div  className='container'>
            <form  onSubmit={HandleOnsubmit } >
        <div className='container d-flex justify-content-between mb-4 '>

            <h1>Inicio Session  </h1>
              <img width="100px"  height="100px" src={ login }></img> 
            
        </div>
        
          <input  required  onChange={HadnldeClicerChangue}  name='usuario' className='form-control mb-2'  placeholder='usuario' ></input>
          <input  required onChange={HadnldeClicerChangue} name='contrasenia' className='form-control mb-2' placeholder='contrasenia' ></input>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>



        </div>
    
          
    
    </>        
  )
}

export default Login