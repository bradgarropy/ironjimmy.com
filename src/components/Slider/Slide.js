import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const SlideWrapper = styled.div`
    background-image: ${({image}) => `url(${image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    width: 100%;
    height: 500px;
`

const Slide = ({image}) => {
    const src = `https:${image.src.split("?")[0]}`
    return <SlideWrapper image={src}/>
}

Slide.propTypes = {
    image: PropTypes.object.isRequired,
}

export default Slide
