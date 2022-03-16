import React, { useContext } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Añadir from './Añadir';
import { Contexto } from './ContextGlobal';
import EditarSingle from './Editar';
import Libros from './Libros';
import Login from './Login';
import Navbar from './Navbar';
import Personal from './Personal';
import Prestamo from './Prestamo';
import RutasPrivada from './RutasPrivada';
import Listadeusuarios from './Suscriptores';

const Rutas = () => {
  const {  estado   , administradores ,  islooger , setislloger , setlibros , libros , Suscriptores} = useContext(Contexto)
  return (
    <>
            <BrowserRouter>
                    {islooger && <Navbar></Navbar>}
                    <Routes>

                  <Route path='/prestamo/:id'  element  ={<Prestamo></Prestamo>}>    </Route>
                  <Route  path='/usuariolista'  element={<Listadeusuarios></Listadeusuarios>} />
                  <Route  path='/cambiar/:id' element={<RutasPrivada>

                    <EditarSingle>
                  </EditarSingle>
                  </RutasPrivada>  } >  </Route>

                  <Route path='/editar:libro'  element={  <RutasPrivada>
                    <Personal></Personal>

                  </RutasPrivada> }  ></Route>  
                  <Route path='/editar'  element={<Añadir></Añadir>}  ></Route>  
                  <Route  path='/yamir'  element={<h1>YAMIRRRRRRRRRRRR</h1>} > </Route>
                  <Route path="/login" element={<Login></Login>} />
                  <Route path="/about" element={<h1>Apellido</h1>} />
                  <Route path="/home" element={  <RutasPrivada>
                                  <Libros></Libros>
                  </RutasPrivada>} />

                   <Route path='*' element={<h1>NO encontrao </h1>} ></Route>
                    </Routes>
              

            </BrowserRouter>



    </>
  )
}

export default Rutas