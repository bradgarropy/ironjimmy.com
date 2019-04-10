import React from "react"
import styled from "styled-components"
import CartButton from "../Cart/CartButton"
import Logo from "./Logo"
import Navigation from "../Navigation/Navigation"

const StyledHeader = styled.header`
    display: grid;
    row-gap: 1rem;
    width: 100%;
    margin: 0 1rem 0 1rem;
    background: ${({theme}) => theme.colors.red};
`

const Header = () => (
    <StyledHeader>
        <CartButton/>
        <Logo/>
        <Navigation/>
    </StyledHeader>
)

export default Header
