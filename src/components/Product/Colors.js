import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import {getColors} from "../../utils/shopify"

const StyledColors = styled.div`
    margin: 3rem 0;

    p {
        text-transform: uppercase;
        font-weight: 600;
        margin: 0;
    }
`

const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 2rem;
    row-gap: 2rem;
    justify-content: start;
`

const Color = styled(Img)`
    width: 5rem;
    height: 5rem;
    border: ${({selected, theme}) =>
        selected
            ? `5px solid ${theme.colors.black}`
            : `5px solid ${theme.colors.white}`};
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
            <p>Color</p>

            <ColorGrid>
                {colors.map(color => {
                    return (
                        <div onClick={onClick} key={color.value}>
                            <Color
                                fluid={color.image}
                                alt={color.value}
                                data-name={color.name}
                                selected={selectedColor.value === color.value}
                            />
                        </div>
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
