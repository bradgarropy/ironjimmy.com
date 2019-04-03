import React, {useContext} from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import CartContext from "../../context/CartContext"

const StyledCartButton = styled(Link)`
    justify-self: right;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    font-weight: 600;

    &:hover {
        color: white;
    }
`

const CartButton = () => {
    const cartContext = useContext(CartContext)
    const items = cartContext.cart.lineItems.length

    return (
        <StyledCartButton to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>{" Cart" + (items ? ` ${items}` : "")}</span>
        </StyledCartButton>
    )
}

export default CartButton
