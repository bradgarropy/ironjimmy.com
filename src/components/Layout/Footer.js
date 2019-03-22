import React from "react"
import styled from "styled-components"
import Policies from "./Policies"
import MadeInUSA from "./MadeInUSA"
import BuiltBy from "./BuiltBy"
import Social from "./Social"
import Container from "../../styles/Container"
import LogoSquareWhite from "../../../static/images/logo-square-white.png"

const StyledFooter = styled.footer`
    display: grid;
    width: 100%;
    justify-content: center;
    border-top: 2px solid ${({theme}) => theme.colors.black};
    background: ${({theme}) => theme.colors.grey};
`

const FooterLayout = styled(Container)`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5rem;
    justify-items: center;
    align-items: start;
`

const StyledLogo = styled.img`
    width: 15rem;
`

const Credits = styled.div`
    display: grid;
    justify-items: start;
`

const Footer = () => {
    return (
        <StyledFooter>
            <FooterLayout>
                <StyledLogo
                    src={LogoSquareWhite}
                    alt="Iron Jimmy - Protect Your Barbell"
                />
                <Policies/>
                <Social/>
                <Credits>
                    <BuiltBy/>
                    <MadeInUSA/>
                </Credits>
            </FooterLayout>
        </StyledFooter>
    )
}

export default Footer
