
import {useState} from "react"






    const ItemCount = ({ initial, stock, onAdd }) => {

        const [contador, setContador] = useState(0)
        

        const sumar = () => {
            
            setContador(contador + 1)
        }
    
        const restar = () => {
            setContador(contador - 1)
        }
    
        const confirmar = () => {
            onAdd(contador)
        }
        
    return (
        <>
        <div className="contador">
        <p id="parrafo">Cantidad: {contador}</p> 
        <button className={`btn ${contador < stock.id ? "btn-success" : "btn-danger"}`} onClick={sumar} id='button'>Sumar</button>
        <button className={`btn ${contador > 1 ? "btn-success" : "btn-danger"}`} onClick={restar} id='button2'>Restar</button>
        
       
        <button className='btn btn-primary' onClick={confirmar} id='button3'>Agregar al Carrito</button>
     
    
    </div>
           
               
        </>
    )
}

export default ItemCount