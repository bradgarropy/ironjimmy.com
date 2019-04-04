import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Meta from "./Meta"
import Header from "./Header"
import Footer from "./Footer"
import CartProvider from "../../context/CartProvider"
import GlobalStyles from "../../styles/GlobalStyles"
import theme from "../../styles/theme"

const StyledLayout = styled.div`
    display: grid;
    justify-items: center;
    min-height: 100vh;
    align-items: start;
    grid-template-rows: auto 1fr auto;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
