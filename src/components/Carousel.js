import React from "react"
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

class Carousel extends React.Component {
    static propTypes = {
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    state = {index: 0}

    carousel = React.createRef()

    componentDidMount = () => {
        this.id = setInterval(this.changeImage, 5000)
        this.preloadImages()
    }

    componentWillUnmount = () => {
        clearInterval(this.id)
    }

    preloadImages = () => {
        this.props.images.forEach(image => {
            let img = document.createElement("img")
            img.src = image
        })
    }

    changeImage = () => {
        const carousel = this.carousel.current
        const index =
            this.state.index === this.props.images.length - 1
                ? 0
                : this.state.index + 1
        const image = this.props.images[index]

        carousel.style.backgroundImage = `url(${image})`
        this.setState({index})
    }

    render = () => {
        const index = this.state.index
        const image = this.props.images[index]

        return (
            <StyledCarousel
                ref={this.carousel}
                style={{backgroundImage: `url(${image})`}}
            />
        )
    }
}

export default Carousel
