import React, { useContext, useState } from 'react'
import { Contexto } from './ContextGlobal'
import {  useNavigate} from "react-router-dom"

const initalUsers = {
    codigolibro:"cc-dd--",
    titulo:"",
    existencia:"",
    editorial:""    
}

const Añadir = () => {
    const navegar = useNavigate()
    const [nuevolibro, setnuevolibro] =  useState(initalUsers)
    const {  estado   , administradores ,  islooger , setislloger , setlibros , libros} =  useContext(Contexto)

    const Escuchareventos = (e)=>{
            setnuevolibro({
                ...nuevolibro,
                [e.target.name] :  e.target.value
            })
    }


    const HandleOnsumit = (e)=>{
        e.preventDefault()
        console.log(nuevolibro)
        setlibros([...libros , nuevolibro])
        navegar("/home")

    }
  return (
    <>
        <div  className='container' >
                <h1 className='text-muted mb-5' >Añadir Nuevo libro </h1>
                <form onSubmit={HandleOnsumit } >
                    <input  onChange={Escuchareventos } required name="codigolibro"  value={nuevolibro.codigolibro}  placeholder='codigo' className='form-control mb-2'></input>
                    <input  onChange={Escuchareventos } required name="titulo" placeholder='titulo'  className='form-control mb-2'></input>
                    <input  onChange={Escuchareventos } required name="existencia" placeholder='existencia'  className='form-control mb-2'></input>
                    <input onChange={Escuchareventos }  required  name="editorial" placeholder='editorial'  className='form-control mb-2'></input>
                    <p className='text-muted' >Libros completed !!</p>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

        </div>
    </>
    
  )


}

export default Añadir