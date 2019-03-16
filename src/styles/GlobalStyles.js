import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body {
        margin: 0;
        font-size: 1.5rem;
    }

    a {
        color: ${({theme}) => theme.colors.black};
        text-decoration: none;
        transition: all 300ms;
    }

    a:visited {
        text-decoration: none;
        color: ${({theme}) => theme.colors.black};
    }

    a:hover {
        color: ${({theme}) => theme.colors.red};
    }

    img {
        width: 100%;
    }

    label {
        text-transform: uppercase;
        font-weight: 600;
    }

    input,
    textarea,
    select {
        border-radius: 3px;
        border: none;
        background: ${({theme}) => theme.colors.lightergrey};
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        padding: 1rem 2rem;
        resize: vertical;
    }
`

export default GlobalStyles
