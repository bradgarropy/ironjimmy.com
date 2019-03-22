import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const StyledEmpty = styled.div`
    text-align: center;

    p {
        font-style: italic;
        color: ${({theme}) => theme.colors.grey};
    }
`

const StyledLink = styled(Link)`
    color: ${({theme}) => theme.colors.black};
    display: block;
    justify-self: center;
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background: ${({theme}) => theme.colors.red};
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        background: ${({theme}) => theme.colors.darkred};
        color: ${({theme}) => theme.colors.black};
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
