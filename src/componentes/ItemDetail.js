

const ItemDetail = ({product}) => {
  return (
    <>
    <div> {product.id} </div>
    <img>{product.image}</img>
    <p>{product.category}</p>
    <p>Precio:{product.price}</p>
    
    </>
  )
}
export default ItemDetail