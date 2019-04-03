import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import ProductFeaturedImage from "./ProductFeaturedImage"
import ProductImages from "./ProductImages"
import ProductMeta from "./ProductMeta"
import ProductColors from "./ProductColors"
import ProductForm from "./ProductForm"
import ProductProvider from "../../context/ProductProvider"

const StyledProduct = styled.div`
    display: grid;
    grid-template-columns: 65fr 35fr;
    justify-items: center;
    column-gap: 5rem;

    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Product = ({product}) => {
    const {descriptionHtml} = product

    return (
        <StyledProduct>
            <ProductProvider product={product}>
                <div>
                    <ProductFeaturedImage/>
                    <ProductImages/>
                    <Markdown>{descriptionHtml}</Markdown>
                </div>

                <div>
                    <ProductMeta/>
                    <ProductColors/>
                    <ProductForm/>
                </div>
            </ProductProvider>
        </StyledProduct>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product
