import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Contexto } from './ContextGlobal'
import {useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
const Personal = () => {

        const navigate =  useNavigate()
        const {  estado   , administradores ,  islooger , setislloger , setlibros , libros ,admin,setadmin} =  useContext(Contexto)
        const [encotrado , setencontrado] = useState({})
        const [actual , setacual] =  useState([])
        let { libro }  = useParams()


const NombresDeprestmoa = ()=>{
//        const verDIchos = admin.filter(item => item.codigo === libro)
//        setacual(verDIchos)
}

const HandleRemove = (data)=>{
                setadmin(admin.filter(item => item.id != data.id))

}

useEffect(()=>{

        NombresDeprestmoa()
 

},[encotrado])

    const Librodado = ()=>{

            const Libroencontrado =  libros.find(item => item.codigolibro === libro)
            setencontrado(Libroencontrado)

    }
    useEffect(()=>{
            Librodado()

    })
    const MandarpantallaEDITARA = ()=>{
        navigate("/prestamo")  
    }   


  return (

    <>
        <div className='container d-flex justify-content-between'>

        <button  className='btn btn-outline-primary' >  <Link  to={`/cambiar/${libro}`} > Editar </Link>  </button>
        </div>
            
                <div className='container'>
                    {encotrado && <div>
                        
                                <h1>{libro}</h1>
                                <h3>{encotrado.titulo}</h3>
                                <h3>{encotrado.existencia}</h3>
                                <h3>{encotrado.editorial}</h3>
                                
                                <button   className='btn btn-success'   > <Link className='text-white' to={`/prestamo/${libro}`}> Solicitar Prestamo </Link> </button>
                        
                        </div>}

                        <hr>
                        </hr>
                        <h1>Alumnos  que Solicitaron el Libro</h1>
                        <hr></hr>
                        {admin.length > 0 ? admin.map(item => <div className='d-flex container '>
                                
                                <div>

                                <h1>{item.nombre}</h1>
                                <button  onClick={  ()=>HandleRemove(item)} className='btn btn-primary mr-4' >Devolver Libro</button>

                                 </div>
                                 
                        </div>)    : <h1> 0 </h1>}

    </div>
    </>
    
  )
}

export default Personal