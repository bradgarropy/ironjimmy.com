import React, {useContext} from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import CartContext from "../context/CartContext"
import {displayPrice} from "../utils/price"
import Container from "../styles/Container"
import colors from "../styles/colors"

const StyledCart = styled.div`
    display: grid;
    row-gap: 5rem;

    h1 {
        margin: 0 0 2rem 0;
        text-align: center;
        text-transform: uppercase;
    }
`

const CartLineItems = styled.div`
    display: grid;
    row-gap: 5rem;
`

const CartLineItem = styled.div`
    display: grid;
    grid-template-columns: auto 70fr 40fr auto;
    column-gap: 5rem;
    align-items: start;
    justify-items: center;
`

const CartLineItemImage = styled.img`
    width: 6rem;
`

const CartLineItemTitle = styled.p`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
`

const CartLineItemVariant = styled.p`
    margin: 0;
    color: ${colors.grey};
`

const CartLineItemPrice = styled.p`
    margin: 0;
    font-size: 2rem;
`

const RemoveFromCart = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        color: ${colors.red};
    }
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
        <Container>
            <StyledCart>
                <h1>Cart</h1>

                <CartLineItems>
                    {cartContext.cart.lineItems.map(item => {
                        return (
                            <CartLineItem key={item.id}>
                                <CartLineItemImage
                                    src={item.variant.image.src}
                                />

                                <div>
                                    <CartLineItemTitle>
                                        {item.title}
                                    </CartLineItemTitle>
                                    <CartLineItemVariant>
                                        {item.variant.title}
                                    </CartLineItemVariant>
                                </div>

                                <CartLineItemPrice>
                                    {displayPrice(item.variant.price)}
                                </CartLineItemPrice>

                                <RemoveFromCart
                                    icon={faTimesCircle}
                                    size="2x"
                                    onClick={() => onClick(item.id)}
                                />
                            </CartLineItem>
                        )
                    })}
                </CartLineItems>

                <Checkout href={cartContext.cart.webUrl}>Checkout</Checkout>
            </StyledCart>
        </Container>
    )
}

export default Cart
