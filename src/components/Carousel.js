import React from "react"
import PropTypes from "prop-types"
import "../scss/Carousel.scss"

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
            <div
                ref={this.carousel}
                className="carousel"
                style={{backgroundImage: `url(${image})`}}
            />
        )
    }
}

export default Carousel
