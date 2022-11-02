import ItemCount from './ItemCount'
import {contexto} from "./CartContext"

import {useState, useContext} from "react"
import {NavLink} from "react-router-dom"


const ItemDetail = ({listProductos}) => {

  const [seAgrego, setSeAgrego] = useState(false)
  const {agregarCarrito}=useContext(contexto) 
  
  const onAdd=(contador)=>{
    setSeAgrego(true)
    listProductos.cantidad = contador
    
    agregarCarrito(listProductos)
  
  }

  return (
    <>
    <div className="card">
    <img src={listProductos.image} alt={listProductos.id}></img>
     
     <h1>{listProductos.product} </h1> 
     <h2>{listProductos.description} </h2>
     <h3>{listProductos.category}</h3>
     <h4>Precio:${listProductos.price} </h4> 
     <h5>Disponible:{listProductos.stock}</h5>  
     
     {
      seAgrego ?
      <NavLink to="/cart">
       <button className="btn btn-primary">Ir al Carrito</button>
      </NavLink>
      :
      <ItemCount className="prueba" stock={listProductos.stock} incial={0} onAdd={onAdd}/>
     }
    
   
   </div>
    </>
  )
} 
export default ItemDetail