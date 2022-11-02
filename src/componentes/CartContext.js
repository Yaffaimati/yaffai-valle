
import {createContext, useState} from 'react';

export const contexto = createContext();
const { Provider} = contexto

const CartContext = (props) => {

    const [cantidad, setCantidad] = useState(0)
    const [carrito, setCarrito] = useState([])

    const isInCart = ((id) => {
        return carrito.some(c => c.id === id)
    })

    const agregarCarrito = (product) => {

        if (isInCart(product.id)) {
            const encontra = carrito.find(x => x.id === product.id)
            const index = carrito.indexof(encontra)
            const arr = [...carrito]
            arr[index].cantiadad += cantidad
            setCarrito(arr)
        } 
        else{
            setCarrito([...carrito, product])
            setCantidad(cantidad + product.cantidad);
        }
    }


    const eliminarItem = (id) => {
        return setCarrito(carrito.filter(element => element.id !== id))
    }
    
    const eliminarCarrito = () => {
        setCarrito([])
        setCantidad(0)
    }

    const getItemPrice = () => {
        return carrito.reduce ((acc, x) => acc += x.cantidad * x.price, 0)

    }

    const valorDeContexto = {
        cantidad: cantidad,
        carrito: carrito,
        agregarCarrito,
        eliminarCarrito,
        eliminarItem,
        getItemPrice,

    }
        
        return (
            <Provider value={valorDeContexto}>
                {props.children}
            </Provider>
        )

}
export default CartContext