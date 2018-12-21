import React from "react"
import {library} from "@fortawesome/fontawesome-svg-core"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

library.add(faInstagram)

const Social = () => {
    return <FontAwesomeIcon icon={faInstagram} size="8x"/>
}

Social.propTypes = {}

// export
export default Social
