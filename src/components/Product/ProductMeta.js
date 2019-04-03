import React, {useContext} from "react"
import styled from "styled-components"
import ProductContext from "../../context/ProductContext"
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

const ProductMeta = () => {
    const productContext = useContext(ProductContext)
    const {product} = productContext

    const {title} = product
    const price = product.priceRange.minVariantPrice.amount

    return (
        <StyledProductMeta>
            <h1>{title}</h1>
            <p>{displayPrice(price)}</p>
        </StyledProductMeta>
    )
}

export default ProductMeta
