import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import Image from "../components/Image"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Sleeves = ({data}) => {
    const title = data.shopifyCollection.title
    const image = data.shopifyCollection.image.src
    const products = data.shopifyCollection.products

    return (
        <Layout>
            <Container>
                <ProductCategoryHeader>
                    <h1>{title}</h1>
                    <Image src={image}/>
                </ProductCategoryHeader>

                <ProductGrid>
                    {products.map(product => {
                        const id = product.shopifyId
                        const type = product.productType.toLowerCase()
                        const handle = product.handle
                        const title = product.title
                        const price = product.priceRange.minVariantPrice.amount
                        const image = product.images[0].originalSrc

                        const link = `/${type}/${handle}`

                        return (
                            <ProductPreview key={id}>
                                <a href={link}>
                                    <Image src={image}/>
                                </a>

                                <a href={link}>
                                    <h2>{title}</h2>
                                </a>

                                <p>{displayPrice(price)}</p>
                            </ProductPreview>
                        )
                    })}
                </ProductGrid>
            </Container>
        </Layout>
    )
}

Sleeves.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        shopifyCollection(title: {eq: "Barbell Sleeves"}) {
            title
            image {
                src
            }
            products {
                shopifyId
                title
                handle
                productType
                priceRange {
                    minVariantPrice {
                        amount
                    }
                }
                images {
                    originalSrc
                }
            }
        }
    }
`

export default Sleeves
