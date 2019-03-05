import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import colors from "../../styles/colors"

const StyledEmpty = styled.div`
    text-align: center;

    p {
        font-style: italic;
        color: ${colors.grey};
    }
`

const StyledLink = styled(Link)`
    color: ${colors.black};
    display: block;
    justify-self: center;
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: ${colors.red};
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        background-color: ${colors.darkred};
        color: ${colors.black};
    }
`

const Empty = () => {
    return (
        <StyledEmpty>
            <p>There is nothing in your cart.</p>
            <StyledLink to="/">Go Shopping!</StyledLink>
        </StyledEmpty>
    )
}

export default Empty
