import { useState, useContext } from "react";
import {Link} from "react-router-dom"
import { contexto } from "./CartContext";
import { useReducer } from "react";

const Cart = () => {
  
  const { cart } = useContext(contexto)
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: ""

  })



const handleSubmit = (e) => {
  e.preventDefault()
}

const handleClick = (e) => {
  e.preventDefault()
}

const handleNombreChange = (e) => {
  setNombre(e.target.value)
}

const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

const handleTelefonoChange = (e) => {
  setTelefono(e.target.value)
}

const handleChange = (e) => {
  setUsuario({ ...usuario, [e.target.id] : e.target.value})
}

   return (
    <div>

<form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" id="nombre" placeholder="Nombre..." value={nombre} />
        </div>
        <div>
          <input onChange={handleChange} type="email" id="email" placeholder="Email..." value={email} />
        </div>
        <div>
          <input onChange={handleChange} type="number" id="telefono" placeholder="Telefono..." />
        </div>
        <button>Comprar</button>
      </form>

      <Link to="/checkout">Proceder con la compra</Link>
    </div>
   )
  
}
export default Cart
