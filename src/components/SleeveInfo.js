import React from "react"
import PropTypes from "prop-types"
import {displayPrice} from "../utils/price"
import "../scss/SleeveInfo.scss"

const SleeveInfo = ({sleeve}) => {
    const {name, price} = sleeve
    const description = sleeve.description.description

    return (
        <div className="sleeve-info">
            <h2>{name}</h2>
            <p>{displayPrice(price)}</p>
            <p>{description}</p>
        </div>
    )
}

SleeveInfo.propTypes = {
    sleeve: PropTypes.object.isRequired,
}

export default SleeveInfo
