import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    row-gap: 1rem;
    justify-content: center;
    justify-self: stretch;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1rem;
    border-top: 2px solid ${({theme}) => theme.colors.black};
    border-bottom: 2px solid ${({theme}) => theme.colors.black};

    a:hover {
        color: white;
    }

    @media (max-width: 550px) {
        grid-auto-flow: row;

        span {
            display: none;
        }
    }
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
