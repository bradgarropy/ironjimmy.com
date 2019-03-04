import React from "react"
import styled from "styled-components"
import colors from "../../styles/colors"
import Policies from "./Policies"
import MadeInUSA from "./MadeInUSA"
import Social from "./Social"

const StyledFooter = styled.footer`
    box-sizing: border-box;
    display: flex;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    justify-items: stretch;
    align-items: start;
    padding: 3rem;
    width: 100%;
    border-top: 2px solid ${colors.black};
`

const Footer = () => (
    <StyledFooter>
        <Policies/>
        <Social/>
        <MadeInUSA/>
    </StyledFooter>
)

export default Footer
