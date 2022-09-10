import NavBars from "./NavBars"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./Cart"
import CartContext from './CartContext'
import "../firebase"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App (){
    return (
    <BrowserRouter>
      <CartContext> 
        <NavBars/>
        <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />  
        <Route exact path='/category/:id' element={<ItemListContainer/>} /> 
        <Route exact path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
      </CartContext>
    </BrowserRouter>
    
    
  )
}
export default App;
