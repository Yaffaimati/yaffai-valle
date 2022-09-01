import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material'
import {useContext} from 'react'
import {CartContext } from './CartContext';

const CartWidget = () => {

  const {getItemQty} = useContext(CartContext)

  return (
    <div>
      <Badge badgeContent={getItemQty()} >
        <ShoppingCartIcon />
      </Badge>
    </div >
  )
}

export default CartWidget