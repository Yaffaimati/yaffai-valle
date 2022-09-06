import {useState} from "react"

const Cart = () => {
 
  const [nombre, setNombre] = useState ("");
  
  const [apellido, setApellido] = useState ("");

  const [email, setEmail] = useState ("");
  
  const [telefono, setTelefono] = useState ("");


  const [usuarios, setUsuarios] = useState ([]);

  const nombreCompleto = `${nombre} ${apellido}`;

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
    const usuario = {nombre, apellido}
    const usuarios_copia = [...usuarios]
    usuarios_copia.push(usuario)
    setUsuarios(usuarios_copia)
  }
    
    return (
       <div className = 'col-xl-4'>
       <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre}/>
       <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido}/>
       <input type="text" placeholder="Email" onChange={handleChangeApellido} value={email}/>
       <input type="text" placeholder="Telefono" onChange={handleChangeApellido} value={telefono}/>

       <button onClick={handleConfirm}>confirmar compra</button>
       </div>
  )
}
export default Cart