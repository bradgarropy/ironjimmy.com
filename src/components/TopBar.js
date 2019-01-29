import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

const StyledTopBar = styled.a`
    justify-self: right;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    font-weight: 600;
`

const TopBar = () => (
    <StyledTopBar href="/cart">
        <FontAwesomeIcon icon={faShoppingCart}/> Cart
    </StyledTopBar>
)

export default TopBar
