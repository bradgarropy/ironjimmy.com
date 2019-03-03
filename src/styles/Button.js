import styled from "styled-components"
import colors from "./colors"

const Button = styled.button`
    color: ${colors.black};
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: ${props =>
        props.disabled ? colors.lightgrey : colors.red};
    cursor: ${props => (props.disabled ? "auto" : "pointer")};
    transition: all 300ms;

    &:hover {
        background-color: ${props => !props.disabled && colors.darkred};
    }
`

export default Button
