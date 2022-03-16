import React, { createContext, useEffect, useState } from 'react'

export const Contexto = createContext()

const LibrosPrestados = []

const Suscriptores = [

    {id:1 , nombre:"pablo" , apellido:"suares" , codigolibro:"cc-dd--134",   carrera:"informatica" , codigoalumno:"987"},
    {id:2 , nombre:"pedro" , apellido:"ordeñez" , codigolibro:"cc-dd--134   ",   carrera:"ing-civil" , codigoalumno:"555"},
    {id:3 , nombre:"miguel" , apellido:"menos" , codigolibro:"cc-dd--134",   carrera:"derecho" , codigoalumno:"999"}


]

const initialLibros = [
    
    {id:1 , titulo:"harry-potter" , editorial:"c" , existencia:5  , codigolibro:"cc-dd--234"},
    {id:2 , titulo:"pinochi" , editorial:"d" , existencia:10  , codigolibro:"cc-dd--134"},
    {id:3 , titulo:"dracula" , editorial:"a" , existencia:20 , codigolibro:"cc-dd--534"},
    {id:4 , titulo:"el ginete" , editorial:"h" , existencia:30  , codigolibro:"cc-dd--634"},
]





const administradores = [

    {id : 1, usuario:"yamir" , contrasenia :"123456" },
    {id : 2, usuario:"jorge" , contrasenia :"123456789" }


]

const ContextGlobal = ( {  children}) => {
    const [admin , setadmin] =  useState(LibrosPrestados)
    const [libros, setlibros] =  useState(initialLibros)
    const [estado , setestado] =  useState()
    const [ islooger , setislloger] =  useState(JSON.parse(localStorage.getItem("loger")))

    const GudarLoger = ()=>{
            localStorage.setItem("loger" , JSON.stringify(islooger))
    }


    useEffect(()=>{
            GudarLoger()

    },[islooger])



    const data = {  estado   
                , administradores 
                ,  islooger 
                , setislloger 
                , setlibros 
                , libros 
                , Suscriptores
                ,admin
                ,setadmin}

    return (

            <Contexto.Provider  value={data} >

                        {children}

            </Contexto.Provider>

    )

}

export default ContextGlobal