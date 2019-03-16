import styled from "styled-components"

const Button = styled.button`
    color: ${({theme}) => theme.colors.black};
    padding: 1.5rem 6rem;
    border: none;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    background-color: ${({disabled, theme}) =>
        disabled ? theme.colors.lightgrey : theme.colors.red};
    cursor: ${({disabled}) => (disabled ? "auto" : "pointer")};
    transition: all 300ms;

    &:hover {
        background-color: ${({disabled, theme}) =>
        !disabled && theme.colors.darkred};
    }
`

export default Button
