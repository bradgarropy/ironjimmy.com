import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

const Social = () => {
    return (
        <a href="https://www.instagram.com/iron_jimmy_sleeves">
            <FontAwesomeIcon icon={faInstagram} size="3x"/>
        </a>
    )
}

Social.propTypes = {}

// export
export default Social
