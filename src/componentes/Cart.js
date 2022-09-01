import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

function Cart() {

    const [checkout, setCheckout] = useState(false)

    const { cart, deleteItem, emptyCart } = useContext(CartContext)

    if (cart.length > 0) {
        return (
            <div className='row col-xl-12'>
                <div className='cartView col-xl-8'>
                    {
                        cart.map((products) => {
                            return <div className='cartItem col-xl-6 d-flex align-items-center justify-content-evenly' key={products}>
                                <div>
                                    <img src={products.image} alt={products.name} width={150}></img>
                                </div>
                                <div>
                                    <h3>{products.product}</h3>
                                    <h2>Precio: ${products.price}</h2>
                                    <h3>Unidades: {products.qty}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteItem(products.id)} className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        })
                    }
                    <button onClick={() => emptyCart()} className='btn btn-warning'>Vaciar Carrito</button>
                    <Link to={'/checkout'}>
                <button className="btn btn-success">Ir al Checkout</button>
            </Link>
         </div>
    </div>
    )    
  }
  return (
    <div>
        <h1>Estas en tu Carrito!!!</h1>
        <Link to={"/"}><button className='btn btn-success '>Ir al Inicio</button></Link>
    </div>
  )
}
export default Cart
