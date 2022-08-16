import NavBars from "./NavBars"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App (){
    return (
    <BrowserRouter>
        <NavBars/>
        <Routes>
        <Route exact path='/home' element={<ItemListContainer/>} />  
        <Route exact path='/category/categoryId' element={<ItemListContainer/>} /> 
        <Route exact path='/detalle/:id' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
    
    
  )
}
export default App;