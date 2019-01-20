import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import IronJimmy from "../../static/images/iron-jimmy-sleeves.png"

const StyledLogo = styled(Link)`
    max-width: 750px;
    justify-self: center;
`

const Logo = () => (
    <StyledLogo to="/">
        <img src={IronJimmy}/>
    </StyledLogo>
)

export default Logo
