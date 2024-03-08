import React from 'react'

const Carrito = ({carrito, setCarrito}: {carrito: boolean, setCarrito: Function}) => {

    if(!carrito) return null

  return (
    <div>
        <div>
            <p>carrito</p>
            <button onClick={()=>setCarrito(false)}>x</button>
        </div>
    </div>
  )
}

export default Carrito