import React, { useState , useEffect, useContext } from 'react'
import {  Navigate, useParams } from "react-router-dom"
import { Contexto } from './ContextGlobal'
import { useNavigate } from "react-router-dom"

const initalUser ={
    codigolibro:"",
    titulo:"",
    existencia:"",
    editorial:""
}
const EditarSingle = () => {
    const navegar  =  useNavigate()
    const {id} =  useParams()
    const {  estado   , administradores ,  islooger , setislloger , setlibros , libros}  = useContext(Contexto)
    const [inital , setinital] =  useState(initalUser)
    
   
    const handlechanue = (e)=>{
        setinital({
            ...inital ,
            [e.target.name] :e.target.value
        })

    }

    const Librodado = ()=>{

        const Libroencontrado =  libros.find(item => item.codigolibro === id)
        setinital(Libroencontrado)


}
useEffect(()=>{
        Librodado()
},[])

const HadnleSubmit = (e)=>{
        e.preventDefault()
        console.log(inital)
        setlibros(libros.map(item => (
            item.codigolibro === inital.codigolibro ?
                inital
            :
            item
        )))
        navegar("/home")



        
}
  


  return (
        <div className='container'>

{inital &&
<form  onSubmit={HadnleSubmit} >
    <input  onChange={handlechanue} disabled name='codigolibro' value={inital.codigolibro} className='form-control  mb-2'></input>
    <input  className='form-control mb-2' name='titulo' value={  inital.titulo }  onChange={handlechanue} ></input>
    <input className='form-control mb-2' name='existencia' value={  inital.existencia }  onChange={handlechanue} ></input>
    <input className='form-control mb-2' name='editorial' value={  inital.editorial }  onChange={handlechanue} ></input>

<button className='btn btn-outline-primary '>Editar Libro</button>


</form>}


        </div>
        
  )
}

export default EditarSingle