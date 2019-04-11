import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Arrow from "./Arrow"
import Slide from "./Slide"

const SliderWrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    justify-items: center;
    justify-content: center;
`

const Slider = ({images}) => {
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState(images[index])

    useEffect(() => {
        setImage(images[index])
        return
    }, [images, index])

    const next = () => {
        const nextIndex = index === images.length - 1 ? 0 : index + 1
        setIndex(nextIndex)
        return
    }

    const prev = () => {
        const prevIndex = index === 0 ? images.length - 1 : index - 1
        setIndex(prevIndex)
        return
    }

    return (
        <SliderWrapper>
            <Arrow direction="left" onClick={prev}/>
            <Slide image={image}/>
            <Arrow direction="right" onClick={next}/>
        </SliderWrapper>
    )
}

Slider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Slider
