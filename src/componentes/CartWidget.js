import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import {contexto } from './CartContext';
import { useContext} from "react"

const CartWidget = () => {

  const resultado = useContext(contexto)
   console.log(resultado)

   return (
    <div>
      <Badge  badgeContent={resultado.cantidad_total}>
        <ShoppingCartIcon/>
      </Badge>
    </div >
  )
}

export default CartWidget