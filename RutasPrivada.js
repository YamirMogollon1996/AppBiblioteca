import React, { useContext } from 'react'
import { useNavigate , Navigate  } from "react-router-dom"
import { Contexto } from './ContextGlobal'
const RutasPrivada = ( {children}) => {

    const {   estado   , administradores ,  islooger , setislloger} = useContext(Contexto)
    const navigate =  useNavigate()

  return islooger ?  children  : <Navigate  to="/login" />

    
  
}

export default RutasPrivada