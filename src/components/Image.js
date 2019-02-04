import React from "react"
import PropTypes from "prop-types"

const Image = ({src, ...props}) => (
    <img
        src={`https://res.cloudinary.com/bradgarropy/image/fetch/q_auto,f_auto/${src}`}
        {...props}
    />
)

Image.propTypes = {
    src: PropTypes.string.isRequired,
}

export default Image
