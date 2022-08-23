
import {NavLink} from "react-router-dom"
import {contexto} from "./CartContext"
import {useContext} from "react"

const CartWidget = ({}) => {

    const {cantidad} = useContext(contexto)


    return (
        <>
        <NavLink to="/cart">
        <div className="shop">
        <i className="bi bi-cart4"></i>
        </div>
        {cantidad}
        </NavLink>
        </>
    )
}
export default CartWidget