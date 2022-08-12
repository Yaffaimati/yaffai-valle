import Item from './Item'

const ItemList = ({listProducts}) => {
   
    return (           
        <section>
          {listProducts.map(product => <Item key={product.id}
           product = {product} /> )}
        </section>
    )
}
export default ItemList 