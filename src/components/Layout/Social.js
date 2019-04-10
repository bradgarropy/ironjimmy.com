import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faFacebookSquare} from "@fortawesome/free-brands-svg-icons"

const StyledSocial = styled.section`
    display: grid;
    row-gap: 1rem;
`

const Social = () => (
    <StyledSocial>
        <div>
            <a
                href="https://www.instagram.com/iron_jimmy_sleeves"
                aria-label="Instagram"
            >
                <FontAwesomeIcon icon={faInstagram} size="lg"/>
                <span> Instagram</span>
            </a>
        </div>

        <div>
            <a
                href="https://www.facebook.com/IronJimmySleeves"
                aria-label="Facebook"
            >
                <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
                <span> Facebook</span>
            </a>
        </div>
    </StyledSocial>
)

export default Social
