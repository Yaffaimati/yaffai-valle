import Item from './Item'

const ItemList = ({productos}) => {
   
    return (           
        <section>
          {productos.map((product) =><Item key={product.id} product={product}/>)}
        </section>
    )
}
export default ItemList 
