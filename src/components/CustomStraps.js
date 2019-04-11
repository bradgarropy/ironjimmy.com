import React from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import Slider from "./Slider/Slider"

const CustomStrapsWrapper = styled.div`
    display: grid;
    row-gap: 3rem;
    justify-items: center;
`

const StyledHeader = styled.h1`
    margin: 0;
`

const CustomStraps = ({customStraps}) => {
    const {title} = customStraps
    const {description} = customStraps.description
    const photos = customStraps.photos.map(photo => photo.fluid)

    return (
        <CustomStrapsWrapper>
            <StyledHeader>{title}</StyledHeader>
            <Markdown>{description}</Markdown>
            <Slider images={photos}/>
        </CustomStrapsWrapper>
    )
}

CustomStraps.propTypes = {
    customStraps: PropTypes.object.isRequired,
}

export default CustomStraps
