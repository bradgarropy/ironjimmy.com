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

const Color = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color};
    border: 3px dotted black;
`

const Colors = ({title, colors}) => (
    <StyledColors>
        <label>{title}</label>

        <ColorGrid>
            {colors.map((color, index) => (
                <Color key={index} color={color}/>
            ))}
        </ColorGrid>
    </StyledColors>
)

Colors.propTypes = {
    title: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Colors
