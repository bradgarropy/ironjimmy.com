import React from "react"
import styled from "styled-components"
import Policies from "./Policies"
import MadeInUSA from "./MadeInUSA"
import Social from "./Social"
// import LogoSquareWhite from "../../../static/images/logo-square-white.png"
import LogoSquareWhite from "../../../static/images/frame.png"
import colors from "../../styles/colors"

const StyledFooter = styled.footer`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 3rem;
    width: 100%;
    border-top: 2px solid ${colors.black};
`

const StyledLogo = styled.img`
    width: 25rem;
    margin: 10rem;
`

const Footer = () => {
    return (
        <StyledFooter>
            <StyledLogo
                src={LogoSquareWhite}
                alt="Iron Jimmy - Protect Your Barbell"
            />
            <Policies/>
            <Social/>
            <MadeInUSA/>
        </StyledFooter>
    )
}

export default Footer
