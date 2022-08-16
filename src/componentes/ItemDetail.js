
import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  return (
    <>
    <div class="card">
    <img src={product.image} alt={product.id}></img>
     
     <h1>{product.product} </h1> 
     <h2>{product.description} </h2>
     <h3>{product.category}</h3>
     <h4>Precio:${product.price} </h4>   
    <ItemCount class="prueba" stock={product.stock} initial={1}/>
   </div>
    </>
  )
}
export default ItemDetail