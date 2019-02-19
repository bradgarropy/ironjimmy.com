import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import {initializeCart} from "../utils/shopify"
import "../scss/Layout.scss"

const Layout = ({children}) => {
    useEffect(() => {
        initializeCart()
    })

    return (
        <>
            <Meta/>

            <div className="layout">
                <Header/>
                {children}
                <Footer/>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
