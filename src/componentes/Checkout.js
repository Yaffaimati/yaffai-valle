import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contexto } from './CartContext'
import {db} from './Firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

const Checkout = () => {
    const { carrito, getItemPrice, eliminarCarrito } = useContext(contexto)
    const juan = useNavigate()
    const [costumer, setCostumer] = useState({
        name: '',
        lastname: '',
        email: '',
        address: '',
    })



    const handlerChangeInput = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        })

    }


    if (carrito.length === 0) {
        setTimeout(() => {
            juan('/')
        }, 3000)
        return (<div>
            <h1>Todavia no compraste nada...</h1>
        </div>)
    }
    const confirmaCompra = (e) => {
        e.preventDefault()
        eliminarCarrito()
        const orden = {
            items: carrito,
            buyer: { ...costumer },
            price: getItemPrice(),
            date: serverTimestamp()
        }
        
        const ordersCollection = collection(db, "ordenes")
        const consulta = addDoc(ordersCollection, orden)
        consulta
            .then((res) => {
                alert(`Orden con ID: ${res.id} creada con exito! Precio total: $ ${getItemPrice()}`)
            })
            .catch(error => {
                console.log(error)
            })
        console.log(orden)
    }




    return (
        <div>
            <h1>Checkout</h1>
            <h2>Completa tus datos</h2>
            <div className=''>
                <form className='d-flex flex-column w-30 p-3 justify-content-end' >
                    <input
                        placeholder='Nombre'
                        name="name"
                        value={costumer.name}
                        onChange={handlerChangeInput} />
                    <input
                        onChange={handlerChangeInput} value={costumer.lastname} placeholder='Apellido' name='lastname' />
                    <input onChange={handlerChangeInput} value={costumer.address} placeholder='Direccion' name='address' />
                    <input onChange={handlerChangeInput} value={costumer.email} placeholder='Email' name='email' />
                </form>
                <button className='btn btn-success' onClick={confirmaCompra} type="submit">Confirmar compra</button>
                <hr />

            </div>
        </div>
    )
}
export default Checkout