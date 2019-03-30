import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import {getProductImages} from "../../utils/shopify"

const ImageSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    column-gap: 2rem;
    row-gap: 2rem;
    margin: 2rem 0 3rem 0;
`

const StyledImage = styled(Img)`
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

    const onClick = image => {
        setSelectedImage(image)
        props.onClick(image)
        return
    }

    return (
        <ImageSlider>
            {images.map((image, index) => (
                <div onClick={() => onClick(image)} key={index}>
                    <StyledImage
                        fluid={image}
                        selected={selectedImage === image}
                    />
                </div>
            ))}
        </ImageSlider>
    )
}

ProductImages.propTypes = {
    product: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ProductImages
