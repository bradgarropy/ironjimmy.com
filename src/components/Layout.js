import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import "../scss/Layout.scss"
import CartProvider from "../context/CartProvider"

const Layout = ({children}) => {
    return (
        <>
            <Meta/>

            <div className="layout">
                <CartProvider>
                    <Header/>
                    {children}
                    <Footer/>
                </CartProvider>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
