import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import {getCart, addToCart, removeFromCart} from "../utils/shopify"
import "../scss/Layout.scss"
import CartContext from "../context/CartContext"

const Layout = ({children}) => {
    const [cart, setCart] = useState({lineItems: []})

    useEffect(() => {
        initializeCart()
    }, [])

    const initializeCart = async() => {
        const cart = await getCart()
        setCart(cart)
        return
    }

    const add = async variant => {
        const cart = await addToCart(variant)
        setCart(cart)
        return
    }

    const remove = async lineItem => {
        const cart = await removeFromCart(lineItem)
        setCart(cart)
        return
    }

    return (
        <>
            {/* <Meta/> */}

            <div className="layout">
                <CartContext.Provider
                    value={{
                        cart: cart,
                        add: add,
                        remove: remove,
                    }}
                >
                    <Header/>
                    {children}
                    <Footer/>
                </CartContext.Provider>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
