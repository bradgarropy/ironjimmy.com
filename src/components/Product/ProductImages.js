import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import colors from "../../styles/colors"

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
    border: ${props =>
        props.selected
            ? `5px solid ${colors.black}`
            : `5px solid ${colors.white}`};
`

const ProductImages = props => {
    const {product} = props
    const images = product.images.map(image => image.originalSrc)

    const [selectedImage, setSelectedImage] = useState(images[0])

    const onClick = event => {
        const selectedImage = event.target.getAttribute("src")
        setSelectedImage(selectedImage)
        return
    }

    return (
        <div {...props}>
            <img src={selectedImage} alt={product.title}/>
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
        </div>
    )
}

ProductImages.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductImages
