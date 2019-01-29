import React from "react"
import styled from "styled-components"
import TopBar from "./TopBar"
import Logo from "./Logo"
import Navigation from "./Navigation"

const StyledHeader = styled.header`
    display: grid;
    row-gap: 1rem;
    width: 100%;
    margin: 0 1rem 0 1rem;
`

const Header = () => (
    <StyledHeader>
        <TopBar/>
        <Logo/>
        <Navigation/>
    </StyledHeader>
)

export default Header
