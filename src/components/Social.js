import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

const StyledSocial = styled.a`
    margin-right: 3rem;
`

const Social = () => (
    <StyledSocial href="https://www.instagram.com/iron_jimmy_sleeves">
        <FontAwesomeIcon icon={faInstagram} size="3x"/>
    </StyledSocial>
)

export default Social
