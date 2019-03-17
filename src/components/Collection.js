import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Collection = ({collection}) => {
    const title = collection.title
    const image = collection.image.localFile.childImageSharp.fluid
    const products = collection.products

    return (
        <>
            <ProductCategoryHeader>
                <h1>{title}</h1>
                <Img fluid={image}/>
            </ProductCategoryHeader>

            <ProductGrid>
                {products.map(product => {
                    const id = product.shopifyId
                    const type = product.productType.toLowerCase()
                    const handle = product.handle
                    const title = product.title
                    const price = product.priceRange.minVariantPrice.amount
                    const image =
                        product.images[0].localFile.childImageSharp.fluid

                    const link = `/${type}/${handle}`

                    return (
                        <ProductPreview key={id}>
                            <a href={link}>
                                <Img fluid={image}/>
                            </a>

                            <a href={link}>
                                <h2>{title}</h2>
                            </a>

                            <p>{displayPrice(price)}</p>
                        </ProductPreview>
                    )
                })}
            </ProductGrid>
        </>
    )
}

Collection.propTypes = {
    collection: PropTypes.object.isRequired,
}

export default Collection
