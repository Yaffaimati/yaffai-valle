import {useState} from "react"

const ItemCount = ({initial,stock, onAdd}) => {
    

    const[contador, setContador] = useState (initial)
    
     
    const sumar = () => contador < stock && setContador(contador + 1)
    const restar = () => contador > initial && setContador (contador - 1)
    const confirmar = () =>  onAdd 
    
            return (
            <div class="contador">
                <p id="parrafo">Cantidad: {contador}</p>
                <button onClick ={sumar} id='button'>Sumar</button>
                <button onClick ={restar} id='button2'>Restar </button>
                <button onClick ={confirmar} id='button3'>Agregar la Carrito</button>
            </div>)
}
export default ItemCount