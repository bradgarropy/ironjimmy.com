import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

const NavigationLink = ({url, text, separator = true}) => {
    return (
        <>
            <Link to={`/${url}`}>{text}</Link>
            {separator && <span>|</span>}
        </>
    )
}

NavigationLink.propTypes = {
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    separator: PropTypes.bool,
}

export default NavigationLink
