import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {getProductImages} from "../../utils/shopify"

const ImageSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    column-gap: 2rem;
    row-gap: 2rem;
    margin: 2rem 0 3rem 0;
`

const StyledImage = styled.img`
    box-sizing: border-box;
    padding: 0.5rem;
    border: ${({selected, theme}) =>
        selected
            ? `5px solid ${theme.colors.black}`
            : `5px solid ${theme.colors.white}`};
`

const ProductImages = props => {
    const {product} = props
    const images = getProductImages(product)

    const [selectedImage, setSelectedImage] = useState(images[0])

    const onClick = event => {
        const selectedImage = event.target.getAttribute("src")
        setSelectedImage(selectedImage)
        props.onClick(event)
        return
    }

    return (
        <ImageSlider>
            {images.map((image, index) => (
                <StyledImage
                    key={index}
                    onClick={onClick}
                    src={image}
                    selected={selectedImage === image}
                />
            ))}
        </ImageSlider>
    )
}

ProductImages.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ProductImages
