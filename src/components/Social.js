import React from "react"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

library.add(faInstagram)

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
