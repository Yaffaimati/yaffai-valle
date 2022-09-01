import React from 'react'






    const ItemCount = ({ qty, setQty, stock, onAdd }) => {

        const handlerMinus = () => {
            if (qty > 1) {
                setQty(qty - 1)
            }
        }
    
        const handlerPlus = () => {
            if (qty < stock) {
                setQty(qty + 1)
            }
        }

    return (
        <>
        <div className="contador">
        <p id="parrafo">Cantidad: {qty}</p> 
        <button className={`btn ${qty < stock ? "btn-success" : "btn-danger"}`} onClick={handlerPlus} id='button'>Sumar</button>
        <button className={`btn ${qty > 1 ? "btn-success" : "btn-danger"}`} onClick={handlerMinus} id='button2'>Restar</button>
        
       
        <button className='btn btn-primary' onClick={() => {onAdd()}} id='button3'>Agregar al Carrito</button>
     
    
    </div>
           
               
        </>
    )
}

export default ItemCount