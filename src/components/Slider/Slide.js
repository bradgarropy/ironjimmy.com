import React from "react"
import PropTypes from "prop-types"
import {stripParams} from "../../utils/helpers"

const Slide = ({image}) => {
    const src = stripParams(image.src)
    return <img src={src} alt=""/>
}

Slide.propTypes = {
    image: PropTypes.object.isRequired,
}

export default Slide
