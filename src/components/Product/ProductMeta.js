import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {displayPrice} from "../../utils/price"

const StyledProductMeta = styled.div`
    h1 {
        margin: 0 0 0.5rem 0;
    }

    p {
        margin: 0;
        color: ${({theme}) => theme.colors.grey};
    }
`

const ProductMeta = ({product}) => {
    const {title} = product
    const price = product.priceRange.minVariantPrice.amount

    return (
        <StyledProductMeta>
            <h1>{title}</h1>
            <p>{displayPrice(price)}</p>
        </StyledProductMeta>
    )
}

ProductMeta.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductMeta
