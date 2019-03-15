import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import CartProvider from "../../context/CartProvider"
import GlobalStyles from "../../styles/GlobalStyles"

const StyledLayout = styled.div`
    display: grid;
    justify-items: center;
    min-height: 100vh;
    align-items: start;
    grid-template-rows: auto 1fr auto;
    font-family: "Roboto", sans-serif;
`

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <GlobalStyles/>

            <StyledLayout>
                <CartProvider>
                    <Header/>
                    {children}
                    <Footer/>
                </CartProvider>
            </StyledLayout>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
