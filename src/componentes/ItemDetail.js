
import {useContext, useState} from 'react';
import ItemCount from './ItemCount'
import {CartContext } from "./CartContext"

const ItemDetail = ({product}) =>  {

  const [ qty, setQty] = useState (1)

  const {isInCart, addItem} = useContext(CartContext)
  
  const onAdd = () => {
     
    isInCart(product.id)
    addItem(product, qty)
  
  }
  return (
    <>
    <div className="card">
    <img src={product.image} alt={product.id}></img>
     
     <h1>{product.product} </h1> 
     <h2>{product.description} </h2>
     <h3>{product.category}</h3>
     <h4>Precio:${product.price}</h4>   
     <h5>Unidades disponibles: {product.stock}</h5>
    <ItemCount className="prueba" qty={qty} setQty={setQty} stock={product.stock} onAdd={onAdd}/>
   </div>
    </>
  )
}
export default ItemDetail