import React, {useContext} from "react"
import styled from "styled-components"
import CartContext from "../context/CartContext"
import Quantity from "../components/Cart/Quantity"
import Remove from "../components/Cart/Remove"
import Empty from "../components/Cart/Empty"
import {displayPrice} from "../utils/price"
import Container from "../styles/Container"

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
    grid-template-columns: auto auto auto auto auto;
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
    margin: 0 0 0.75rem 0;
    color: ${({theme}) => theme.colors.grey};
`

const CartLineItemAttribute = styled.p`
    margin: 0;
    color: ${({theme}) => theme.colors.grey};
`

const CartLineItemPrice = styled.p`
    margin: 0;
    font-size: 2rem;
`

const CartTotal = styled.p`
    border-top: 2px solid ${({theme}) => theme.colors.black};
    padding-top: 3rem;
    text-align: right;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
`

const Checkout = styled.a`
    color: ${({theme}) => theme.colors.black};
    justify-self: center;
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background: ${({theme}) => theme.colors.red};
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        background: ${({theme}) => theme.colors.darkred};
        color: ${({theme}) => theme.colors.black};
    }
`

const CartPage = () => {
    const cartContext = useContext(CartContext)
    const {cart} = cartContext

    return (
        <Container>
            <StyledCart>
                <h1>Cart</h1>

                {!cart.lineItems.length ? (
                    <Empty/>
                ) : (
                    <>
                        <CartLineItems>
                            {cart.lineItems.map(item => {
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

                                            {item.customAttributes.map(
                                                attribute => (
                                                    <CartLineItemAttribute
                                                        key={attribute.key}
                                                    >
                                                        {attribute.key}:{" "}
                                                        {attribute.value}
                                                    </CartLineItemAttribute>
                                                ),
                                            )}
                                        </div>

                                        <CartLineItemPrice>
                                            {displayPrice(item.variant.price)}
                                        </CartLineItemPrice>

                                        <Quantity item={item}/>

                                        <Remove item={item}/>
                                    </CartLineItem>
                                )
                            })}
                        </CartLineItems>

                        <CartTotal>{displayPrice(cart.totalPrice)}</CartTotal>

                        <Checkout href={cart.webUrl}>Checkout</Checkout>
                    </>
                )}
            </StyledCart>
        </Container>
    )
}

export default CartPage
