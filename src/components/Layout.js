import React from "react"
import PropTypes from "prop-types"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import {createCart} from "../utils/shopify"
import "../scss/Layout.scss"

class Layout extends React.Component {
    componentDidMount = async() => {
        const cartId = localStorage.getItem("shopifyCartId")

        if (!cartId) {
            console.log("🛒⛔")
            const cart = await createCart()
            console.log(`🛒🔧 ${cart.id}`)
            localStorage.setItem("shopifyCartId", cart.id)
        } else {
            console.log(`🛒✨ ${cartId}`)
        }

        return
    }

    render = () => {
        return (
            <>
                <Meta/>

                <div className="layout">
                    <Header/>
                    {this.props.children}
                    <Footer/>
                </div>
            </>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
