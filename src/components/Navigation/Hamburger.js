import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"

const HamburgerWrapper = styled.button`
    cursor: pointer;
    background: none;
    border: none;

    &:hover {
        color: ${({theme}) => theme.colors.white};
    }

    @media (min-width: 950px) {
        visibility: hidden;
    }
`

const Hamburger = props => {
    return (
        <HamburgerWrapper {...props}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
        </HamburgerWrapper>
    )
}

Hamburger.propTypes = {}

export default Hamburger
