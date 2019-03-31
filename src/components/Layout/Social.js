import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

const Social = () => (
    <a
        href="https://www.instagram.com/iron_jimmy_sleeves"
        aria-label="Instagram"
    >
        <FontAwesomeIcon icon={faInstagram} size="3x"/>
    </a>
)

export default Social
