import {createContext, useContext, useState} from 'react';

const contexto = createContext ();

const {Provider} = contexto;

export const useCarrito = () => {
    return useContext(contexto)
}

const CartContext = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState ([]);
    const [precioTotal, serPrecioTotal] = useState (0);
    

    const agregarProducto = (product) => {
        setCantidad (cantidad + product.cantidad)
    }

    const eliminarProducto = () => {}

    const vaciarCarrito = () => {
        setCarrito([])
    }
    
    const estaEnCarrito = (id) => {}    

    const valorDelContexto = {
        cantidad: cantidad,
        carrito : [],
        agregarProducto,
        eliminarProducto,
       }
    
    return (
    <Provider value={valorDelContexto}>
        {props.children}

    </Provider>
    )
}
export default CartContext;