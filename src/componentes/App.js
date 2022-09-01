import NavBars from "./NavBars"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./Cart"
import MyProvider from './CartContext'

function App (){
    return (
    <BrowserRouter>
      <MyProvider titulo="compra"> 
        <NavBars/>
        <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />  
        <Route exact path='/category/:id' element={<ItemListContainer/>} /> 
        <Route exact path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
      </MyProvider>
    </BrowserRouter>
    
    
  )
}
export default App;