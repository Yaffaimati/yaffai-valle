import {useState} from "react"
import {db} from "../firebase"
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import {useCarrito} from "./CartContext"
import {toast} from "react-toastify";

const productosCollection = collection (db, "productos")

const Cart = () => {
 
  const [nombre, setNombre] = useState ("");
  
  const [apellido, setApellido] = useState ("");
 
  const [email, setEmail] = useState ("");
  
  const [telefono, setTelefono] = useState ("");

  const [usuarios, setUsuarios] = useState ([]);

const {carrito} = useCarrito()


  const datosCompleto = `${nombre} ${apellido} ${email} ${telefono}`;

  const handleChangeNombre = (e) => {
    e.preventDefault()
    const input = e.target
    const value = input.value
    setNombre(value)
   }
  
  const handleChangeApellido = (e) => {
    const input = e.target
    const value = input.value
    setApellido(value)
  }
  
  const handleChangeEmail= (e) => {
    const input = e.target
    const value = input.value
    setEmail(value)
  }
   
  const handleChangeTelefono = (e) => {
    const input = e.target
    const value = input.value
    setTelefono(value)
  }
 
  
  const handleConfirm = () => {

    const orden = {
      items : carrito,
      buyer : {
        nombre : "Matias",
        apellido : "Yaffai",
        telegono : "454545363",
        email: "emai@mail.com",
      },
      total : 0,
      date : serverTimestamp(),
    }

    const ordersCollection = collection (db, "orders")
    const consulta = addDoc(ordersCollection,orden)

      consulta 
      .then((res) => {
        toast.success(`Orden${res.id} creada con exito!`)
      })
      .catch(error => {
        console.log(error)
      })

  }
    
    return (
       <div className = 'col-xl-4'>
       <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
       <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>
       <input type="text" placeholder="Email" onChange={handleChangeEmail} value={email}/>
       <input type="text" placeholder="Telefono" onChange={handleChangeTelefono} value={telefono}/>

       <button onClick={handleConfirm}>confirmar compra</button>
       </div>
  )
}
export default Cart