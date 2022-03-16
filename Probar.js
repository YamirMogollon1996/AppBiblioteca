import React, { useState } from 'react'
const inital = [
    {id:1,nombre:"oscar",cantidad:0},
    {id:2,nombre:"pedro",cantidad:0},
]


const Probar = () => {

    const nuevo = {id:22, nombre:"mirella"}
    const [shonen, setshoen] =  useState(inital)

    const HandleCLick = ()=>{

        const reducir  = shonen.reduce((acum ,item ) => ({
                ...acum ,
                [item.id] :  item

        }),{})
        setshoen(reducir)
    }
    
    const Retonrar  = (data)=>{
        return shonen[data]

    }

  return (
      <>
                   <div>Probar</div>
                    <button onClick={ HandleCLick } >+ </button>     
                    {Retonrar(shonen[0].map(item=> <h1>{}</h1>))}
      </>
   )
}


export default Probar