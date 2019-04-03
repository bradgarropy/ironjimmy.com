import React, {useContext} from "react"
import styled from "styled-components"
import CartContext from "../context/CartContext"
import EmptyCart from "../components/Cart/EmptyCart"
import Cart from "../components/Cart/Cart"
import Container from "../styles/Container"

const StyledCartPage = styled(Container)`
    display: grid;
    row-gap: 5rem;

    h1 {
        margin: 0;
        text-align: center;
        text-transform: uppercase;
    }
`

const CartPage = () => {
    const cartContext = useContext(CartContext)
    const {cart} = cartContext

    return (
        <StyledCartPage>
            <h1>Cart</h1>
            {!cart.lineItems.length ? <EmptyCart/> : <Cart/>}
        </StyledCartPage>
    )
}

export default CartPage
