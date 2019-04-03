import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import {displayPrice} from "../utils/price"

const CollectionHeader = styled.div`
    margin-bottom: 3rem;

    h1 {
        text-align: center;
        text-transform: uppercase;
        margin: 0 0 2rem 0;
    }
`

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
    align-items: end;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Product = styled.div`
    h2 {
        margin: 1rem 0 0.5rem 0;
    }

    p {
        margin: 0;
        color: ${({theme}) => theme.colors.grey};
    }
`

const Collection = ({collection}) => {
    const title = collection.title
    const products = collection.products
    const image =
        collection.image && collection.image.localFile.childImageSharp.fluid

    return (
        <>
            <CollectionHeader>
                <h1>{title}</h1>
                {image && <Img fluid={image}/>}
            </CollectionHeader>

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
                        <Product key={id}>
                            <a href={link}>
                                <Img fluid={image}/>
                            </a>

                            <a href={link}>
                                <h2>{title}</h2>
                            </a>

                            <p>{displayPrice(price)}</p>
                        </Product>
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
