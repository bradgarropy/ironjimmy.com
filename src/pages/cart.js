import React, {useContext} from "react"
import styled from "styled-components"
import CartContext from "../context/CartContext"
import colors from "../styles/colors"

const StyledCart = styled.div`
    display: grid;
    text-align: center;
`

const CartLineItem = styled.div`
    display: grid;
    grid-auto-flow: column;
`

const CartItemImage = styled.img`
    width: 6rem;
`

const Remove = styled.button`
    padding: 1rem;
    border: 3px solid black;
    background-color: inherit;
`

const Checkout = styled.a`
    color: ${colors.black};
    justify-self: center;
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: ${colors.red};
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        background-color: ${colors.darkred};
        color: ${colors.black};
    }
`

const Cart = () => {
    const cartContext = useContext(CartContext)

    const onClick = variant => {
        cartContext.remove(variant)
        return
    }

    return (
        <StyledCart>
            <h1>Cart</h1>
            {cartContext.cart.lineItems.map(item => {
                return (
                    <CartLineItem key={item.id}>
                        <CartItemImage src={item.variant.image.src}/>

                        <div>
                            <p>{item.title}</p>
                            <p>{item.variant.title}</p>
                        </div>

                        <p>{item.variant.price}</p>

                        <Remove onClick={() => onClick(item.id)}>X</Remove>
                    </CartLineItem>
                )
            })}
            <Checkout href={cartContext.cart.webUrl}>Checkout</Checkout>
        </StyledCart>
    )
}

export default Cart
