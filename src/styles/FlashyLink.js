import styled from "styled-components"
import {Link} from "gatsby"

const FlashyLink = styled(Link)`
    justify-self: center;
    color: ${({theme}) => theme.colors.black};
    padding: 1.5rem 6rem;
    display: inline-block;
    border-bottom: 10px solid ${({theme}) => theme.colors.black};
    font-weight: 600;
    font-size: 2.5rem;
    text-transform: uppercase;
    border-radius: 3px;
    background: ${({theme}) => theme.colors.red};
    transition: all 300ms;
    text-align: center;

    &:visited {
        color: ${({theme}) => theme.colors.black};
    }

    &:hover {
        color: ${({theme}) => theme.colors.white};
    }
`

export default FlashyLink
