import React, { useContext } from 'react'
import { Contexto } from './ContextGlobal'


const Listadeusuarios = () => {
    const {  estado   , 
            administradores ,  
            islooger , 
            setislloger , 
            setlibros , 
            libros , 
            Suscriptores} = useContext(Contexto)

  return (
    <div  className='container' >
        
        
        
    <table class="table table-striped">
    <thead>
      <tr>
        
        <th  className='text-center' scope="col">Nombre</th>
        <th className='text-center' scope="col">carrera</th>
        <th className='text-center' scope="col">acciones</th>

      </tr>
    </thead>
    <tbody>
        {Suscriptores.map(item => <tr className='text-center'>

                <td>{item.nombre}</td>
                <td>{item.carrera}</td>
                <td>

                    
                            <button className='btn btn-secondary' >More info</button>
                            <button  className='btn btn-danger'>Eliminar</button>

                </td>

        </tr>)}
{/*         
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr> */}
    </tbody>
  </table>

  </div>
  )
}


export default Listadeusuarios