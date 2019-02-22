import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {getCart} from "../utils/shopify"

const StyledCart = styled.a`
    justify-self: right;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    font-weight: 600;
`

const Cart = () => {
    const [cart, setCart] = useState({
        link: "#",
        items: 0,
    })

    useEffect(() => {
        getCart().then(cart => {
            setCart({
                ...cart,
                link: cart.webUrl,
                items: cart.lineItems.length,
            })
        })
    }, [])

    return (
        <StyledCart href={cart.link}>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span> Cart {cart.items}</span>
        </StyledCart>
    )
}

export default Cart
