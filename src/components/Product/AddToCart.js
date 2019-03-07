import React from "react"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faCartPlus,
    faExclamationCircle,
    faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons"
import Button from "../../styles/Button"

const AddToCart = ({soldOut, comingSoon}) => {
    let icon
    let text
    let disabled

    if (comingSoon) {
        icon = faArrowAltCircleRight
        text = "Coming Soon"
        disabled = true
    } else if (soldOut) {
        icon = faExclamationCircle
        text = "Sold Out"
        disabled = true
    } else {
        icon = faCartPlus
        text = "Add To Cart"
        disabled = false
    }

    return (
        <Button disabled={disabled}>
            <FontAwesomeIcon icon={icon}/> {text}
        </Button>
    )
}

AddToCart.propTypes = {
    soldOut: PropTypes.bool.isRequired,
    comingSoon: PropTypes.bool.isRequired,
}

export default AddToCart
