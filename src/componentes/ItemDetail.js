
import {useContext} from 'react';
import ItemCount from './ItemCount'
import {contexto} from "./CartContext"

const ItemDetail = ({product}) => {

  const {agregarProducto} = useContext(contexto)
  
  const onAdd = (contador) => {
    product.cantidad = contador
    agregarProducto(product)
  }
  return (
    <>
    <div className="card">
    <img src={product.image} alt={product.id}></img>
     
     <h1>{product.product} </h1> 
     <h2>{product.description} </h2>
     <h3>{product.category}</h3>
     <h4>Precio:${product.price} </h4>   
    <ItemCount className="prueba" stock={product.stock} onAdd={onAdd}/>
   </div>
    </>
  )
}
export default ItemDetail