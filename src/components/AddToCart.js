import React from "react"
import PropTypes from "prop-types"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faCartPlus,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"
import Button from "../styles/Button"

const AddToCart = ({soldOut}) => {
    const icon = soldOut ? faExclamationCircle : faCartPlus
    const text = soldOut ? "Sold Out" : "Add To Cart"

    return (
        <Button disabled={soldOut}>
            <FontAwesomeIcon icon={icon}/> {text}
        </Button>
    )
}

AddToCart.propTypes = {
    soldOut: PropTypes.bool.isRequired,
}

export default AddToCart
