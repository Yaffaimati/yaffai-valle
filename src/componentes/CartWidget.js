import {NavLink} from "react-router-dom"
import {useCarrito} from "./CartContext"


const CartWidget = ({type}) => {

    const {cantidad} = useCarrito ()


    return (
        <>
        {type == "header" ?(
        <NavLink to="/cart">
        <div className="shop">
        <i className="bi bi-cart4"></i>{cantidad}
        </div>
        </NavLink>
        ): <></>}
        </>
    )
}
export default CartWidget