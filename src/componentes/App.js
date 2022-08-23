import NavBars from "./NavBars"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from "./Cart"

function App (){
    return (
    <BrowserRouter>
        <NavBars/>
        <Routes>
        <Route exact path='/home' element={<ItemListContainer/>} />  
        <Route exact path='/category/:id' element={<ItemListContainer/>} /> 
        <Route exact path='/detalle/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
    
    
  )
}
export default App;