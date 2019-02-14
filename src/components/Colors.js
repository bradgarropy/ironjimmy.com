import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledColors = styled.div`
    margin: 3rem 0;
`

const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 2rem;
    row-gap: 2rem;
    justify-content: start;
`

const Color = styled.img`
    width: 5rem;
    height: 5rem;
`

const Colors = ({title, images}) => (
    <StyledColors>
        <label>{title}</label>

        <ColorGrid>
            {images.map((image, index) => (
                <Color key={index} src={image}/>
            ))}
        </ColorGrid>
    </StyledColors>
)

Colors.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Colors
