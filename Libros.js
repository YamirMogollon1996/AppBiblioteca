import React, { useContext } from 'react'
import { Navigate  , useNavigate} from 'react-router-dom'
import { Contexto } from './ContextGlobal'
import { Link } from "react-router-dom"


const Libros = () => {
    const navigate =  useNavigate()
    const {  estado   , administradores ,  islooger , setislloger ,  setlibros , libros}  =  useContext(Contexto)
    
    const MandarAñadir = ()=>{

            console.log("mandar")
            navigate('/editar')

    }
    const HandleClickRemove = (eliminar)=>{
       setlibros (libros.filter(item => item.codigolibro != eliminar))
        
    }
  return (

        <>

            <div className='container'>
            <button   onClick={  MandarAñadir} className='btn btn-outline-success  mb-4'>Añadir</button>    
            <hr className='mb-4'></hr>


            <table class="table table-striped">

                <thead>
                    <tr className='bg-dark text-white p4'>
                    <th className='text-center' scope="col">codigo</th>
                    <th className='text-center' scope="col">titulo</th>
                    <th className='text-center' scope="col">existencia</th>
                    <th className='text-center' scope="col">editorial</th>
                    <th className='text-center' scope="col">acciones</th>
                    </tr>
                </thead>
                <tbody>

               
                    {libros.map(item =><tr key={item.id} className='espaciado  text-center '>
                        
                            <th  >{item.codigolibro}</th>
                            <th>{item.titulo}</th>
                            <th>{item.existencia}</th>
                            <th>{item.editorial}</th>
                            <th>

                                    <button className='btn btn-outline-info' >
                                        
                                            <Link to= {`/editar${item.codigolibro}`}>  Mas informacion</Link>
                                        </button>
                                    <button  onClick={ ()=>HandleClickRemove(item.codigolibro) }  className='btn btn-outline-danger' > Eliminar</button>
                            </th>

                    </tr>)}

                    </tbody>
</table>
            </div>

        </>

  )
}

export default Libros