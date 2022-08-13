
import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({product}) => {
  return (
    <>
    <div>
    <img src={product.image} alt={product.id} width="400"></img>
     </div>
     <h1>{product.category} </h1> 
     <h2>{product.description} </h2>
     <h3>Precio:${product.price} </h3>   
    <h4>Stock:{product.stock}</h4>
    <ItemCount stock={product.stock} initial={1}/>
     </>
  )
}
export default ItemDetail