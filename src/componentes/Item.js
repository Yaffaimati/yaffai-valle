
const Item = ({product}) => {
    return (
    <> 
    <div>{product.product}</div>
    <img src={product.image}/>
    <button>Ver Detalle</button>
    </>
    )
}
export default Item