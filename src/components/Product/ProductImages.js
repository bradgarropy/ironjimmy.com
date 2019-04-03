import React, {useState, useContext} from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import ProductContext from "../../context/ProductContext"
import {getProductImages} from "../../utils/shopify"

const StyledProductImages = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    align-items: center;
    column-gap: 2rem;
    row-gap: 2rem;
    margin: 2rem 0 3rem 0;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 850px) {
        grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

const ProductImage = styled(Img)`
    box-sizing: border-box;
    padding: 0.5rem;
    border: ${({selected, theme}) =>
        selected
            ? `5px solid ${theme.colors.black}`
            : `5px solid ${theme.colors.white}`};
`

const ProductImages = () => {
    const productContext = useContext(ProductContext)
    const {product, onProductImageChange} = productContext
    const images = getProductImages(product)

    const [selectedImage, setSelectedImage] = useState(images[0])

    const onClick = image => {
        setSelectedImage(image)
        onProductImageChange(image)
        return
    }

    return (
        <StyledProductImages>
            {images.map((image, index) => (
                <div onClick={() => onClick(image)} key={index}>
                    <ProductImage
                        fluid={image}
                        selected={selectedImage === image}
                    />
                </div>
            ))}
        </StyledProductImages>
    )
}

export default ProductImages
