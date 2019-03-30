import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import LogoBlack from "../../../static/images/logo-black.png"

const StyledLogo = styled(Link)`
    max-width: 750px;
    justify-self: center;
`

const Logo = () => (
    <StyledLogo to="/">
        <img src={LogoBlack} alt="Iron Jimmy Premium Sleeves"/>
    </StyledLogo>
)

export default Logo
