import React, {useContext} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import CartContext from "../context/CartContext"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

const StyledCart = styled(Link)`
    justify-self: right;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    font-weight: 600;
`

const Cart = () => {
    const cartContext = useContext(CartContext)
    const items = cartContext.cart.lineItems.length

    return (
        <StyledCart to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>{" Cart" + (items ? ` ${items}` : "")}</span>
        </StyledCart>
    )
}

export default Cart
