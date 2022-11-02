import {useContext} from "react"
import {contexto} from "./CartContext"
import { Link } from 'react-router-dom'



const Cart = () => {
    const { carrito, eliminarItem, eliminarCarrito} = useContext(contexto)

    if (carrito.length > 0) {

        return (
        <>
          <div className="">
            {
              carrito.map((element, index) => {
                return <div key={index} className="">
                  <div><img src={element.image} alt={element.product}/>
                  </div>
                   <div> 
                        <h2>{element.product}</h2>
                        <h3>Precio: ${element.price}</h3>
                        <h3>Cantidad: {element.stock}</h3>
                   </div>
                <div>
                     <button className="btn btn-warning" onClick={() => eliminarItem(element.id)}>Eliminar</button>  
                </div>      
             </div>
           })
         }
     </div>
     <div>
       <button  className="btn btn-warning" onClick={() => eliminarCarrito()}>Vaciar el carrito</button>
     </div>
     <div>
      <Link to={'/checkout'}/><button className="btn btn-success">Ir al checkout</button><Link/>
     </div>
  </>
  )
}


}

export default Cart
