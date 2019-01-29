import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import colors from "../styles/colors"

const StyledNavigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    justify-content: center;
    justify-self: stretch;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1rem;
    border-top: 2px solid ${colors.black};
    border-bottom: 2px solid ${colors.black};
`

const Navigation = () => (
    <StyledNavigation>
        <Link to="/sleeves">Sleeves</Link>
        <span>|</span>
        <Link to="/straps">Straps</Link>
        <span>|</span>
        <Link to="/apparel">Apparel</Link>
        <span>|</span>
        <Link to="/about">About</Link>
        <span>|</span>
        <Link to="/contact">Contact</Link>
    </StyledNavigation>
)

export default Navigation
