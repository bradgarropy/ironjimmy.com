import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import MadeInUSA from "./MadeInUSA"
import Social from "./Social"

const StyledFooter = styled.footer`
    box-sizing: border-box;
    display: flex;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    justify-items: stretch;
    padding: 3rem;
    width: 100%;
    border-top: 2px solid ${colors.black};
`

const Footer = () => (
    <StyledFooter>
        <MadeInUSA/>
        <Social/>
    </StyledFooter>
)

export default Footer
