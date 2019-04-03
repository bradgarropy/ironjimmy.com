import React, {useState, useContext} from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ProductContext from "../../context/ProductContext"
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

const Colors = () => {
    const productContext = useContext(ProductContext)
    const {product, onColorChange} = productContext
    const colors = getColors(product)

    const [selectedColor, setSelectedColor] = useState(colors[0])

    const onClick = color => {
        setSelectedColor(color)
        onColorChange(color)
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
                        <div key={color.value} onClick={() => onClick(color)}>
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

export default Colors
