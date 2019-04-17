import React, {useState, useRef, useEffect} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledCarousel = styled.div`
    width: 100%;
    height: 80vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition-property: background-image;
    transition-duration: 1s;
    transition-timing-function: linear;

    @media (max-width: 1200px) {
        height: 65vh;
    }

    @media (max-width: 1000px) {
        height: 50vh;
    }

    @media (max-width: 800px) {
        height: 35vh;
    }

    @media (max-width: 600px) {
        height: 25vh;
    }
`

const Carousel = ({images}) => {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[index])
    const carousel = useRef()

    // preload images
    useEffect(() => {
        images.forEach(image => {
            let img = document.createElement("img")
            img.src = image
        })
        return
    }, [images])

    // update image
    useEffect(() => {
        setImage(images[index])
        return
    }, [images, index])

    // display image
    useEffect(() => {
        carousel.current.style.backgroundImage = `url(${image})`
        return
    }, [image])

    // change image
    useEffect(() => {
        const changeImage = () => {
            const newIndex = index === images.length - 1 ? 0 : index + 1
            setIndex(newIndex)
            return
        }

        const id = setInterval(changeImage, 5000)

        return () => {
            clearInterval(id)
        }
    }, [images, index])

    return (
        <StyledCarousel
            ref={carousel}
            style={{
                backgroundImage: `url(${image})`,
            }}
        />
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel
