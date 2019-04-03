import React, {useState, useRef, useEffect} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledCarousel = styled.div`
    width: 100%;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition-property: background-image;
    transition-duration: 1s;
    transition-timing-function: linear;
`

const Carousel = ({images}) => {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[index])
    const carousel = useRef()

    // preload images
    useEffect(() => {
        images.forEach(image => {
            let img = document.createElement("img")
            img.src = `https://res.cloudinary.com/bradgarropy/image/fetch/q_auto,f_auto/${image}`
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
        carousel.current.style.backgroundImage = `url(https://res.cloudinary.com/bradgarropy/image/fetch/q_auto,f_auto/${image})`
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
                backgroundImage: `url(https://res.cloudinary.com/bradgarropy/image/fetch/q_auto,f_auto/${image})`,
            }}
        />
    )
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Carousel
