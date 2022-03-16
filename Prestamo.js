import React, { useContext, useState } from 'react'
import { useParams  , useNavigate } from 'react-router-dom'
import { Contexto } from './ContextGlobal'
import Libros from './Libros'
const codigo= ""


const Prestamo = () => {

    const { id } = useParams() 
    const navigate = useNavigate()
    const [text  , settext]  = useState(codigo)
    const {  estado   , administradores ,  islooger , setislloger , setlibros , libros , Suscriptores ,admin, setadmin} =  useContext(Contexto)
    // const [libroprestamo , setlibropresmo] =  useState()
    const [loader , setloader] =  useState(false)
    const [encontrado , setencontroad] =  useState({})


    const HandleCodigo = (e)=>{
        settext(e.target.value)
    }
    const SerachAlumno = ()=>{
        const filtro =  Suscriptores.find(item => item.codigoalumno === text )
        return filtro
    }

    const HandleSUbmit = (e)=>{
        e.preventDefault()
        setencontroad( SerachAlumno())
        setloader(true)
        
    }
    const agregarNuevo  = ()=>{
        
        console.log(id)
        const nuevo = { id : id , nombre : encontrado.nombre  } 
        const encontradoL =  admin.find(item => item.id === nuevo.id)
        !encontradoL && setadmin([...admin ,  nuevo]) 
        
      
    }

    const HandlePresmtao = ()=>{
    
         setlibros ( libros.map(item =>(
                item.codigolibro === id  ?
                {... item ,  existencia :  item.existencia -1  } 
                :  item
        )))
        agregarNuevo()

        // console.log(admin)
    
    
        setTimeout(()=>{
                navigate("/home")
        },500)
    }
        
  return (

        <div className='container'>
            <form  onSubmit={HandleSUbmit }>

            <h1>Codigo Alumno : </h1>
            <input  onChange={ HandleCodigo }  name="codigo" placeholder='codigo alumno' className='form-control'></input>
            <button  onClick={SerachAlumno } className='btn btn-success mt-4'>Buscar Alumno</button>

           
            </form>
            <hr></hr>
            {!loader ?  <h1>encontrado</h1>  :  
                <div>
                    <div className='bg-dark h-25 libra' ></div>
                    <h1> {encontrado.nombre} </h1>
                    <h2>{encontrado.carrera}</h2>
                    <p  className='text-muted'>Muted is logger</p>
                    <button  onClick={ HandlePresmtao }  className='btn btn-success' >Solicar  Prestamo</button>
                
                </div> }

                  
        </div>

  )
}

export default Prestamo