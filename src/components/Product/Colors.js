import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {getColors} from "../../utils/shopify"
import colors from "../../styles/colors"

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
    border: ${props =>
        props.selected
            ? `5px solid ${colors.black}`
            : `5px solid ${colors.white}`};
`

const Colors = props => {
    const {product} = props
    const colors = getColors(product)

    const [selectedColor, setSelectedColor] = useState(colors[0])

    const onClick = event => {
        const color = colors.find(
            element => element.value === event.target.getAttribute("alt"),
        )
        setSelectedColor(color)
        props.onClick(event)
        return
    }

    if (!colors.length) {
        return null
    }

    return (
        <StyledColors>
            <label>Color</label>

            <ColorGrid>
                {colors.map(color => {
                    return (
                        <Color
                            key={color.value}
                            src={color.image}
                            alt={color.value}
                            data-name={color.name}
                            selected={selectedColor.value === color.value}
                            onClick={onClick}
                        />
                    )
                })}
            </ColorGrid>
        </StyledColors>
    )
}

Colors.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Colors
