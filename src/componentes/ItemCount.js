import {useState} from "react"
import {Link} from 'react-router-dom'
import Cart from './Cart'

const ItemCount = ({initial,stock, onAdd}) => {
    

    const[contador, setContador] = useState (initial)
    
     
    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > initial && setContador (contador - 1)
    const confirmar = () =>  onAdd 
    
            return (
            <div className="contador">
                <p id="parrafo">Cantidad: {contador}</p>
                <button onClick ={sumar} id='button'>Sumar</button>
                <button onClick ={restar} id='button2'>Restar </button>
               <Link to={"/cart"}>
                <Cart/>
                <button onClick ={confirmar} id='button3'>Confirmar Compra</button>
                </Link> 
            </div>
            )
}
export default ItemCount