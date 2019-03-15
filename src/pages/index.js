import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Carousel from "../components/Carousel"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Index = ({data}) => {
    const carousel = data.allContentfulCarousel.edges[0].node
    const images = carousel.images.map(image => `https:${image.file.url}`)
    const title = data.shopifyCollection.title
    const products = data.shopifyCollection.products

    return (
        <>
            <Carousel images={images}/>

            <Container>
                <ProductCategoryHeader>
                    <h1>{title}</h1>
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
                                    <img src={image}/>
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
        </>
    )
}

Index.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulCarousel {
            edges {
                node {
                    images {
                        file {
                            url
                        }
                    }
                }
            }
        }
        shopifyCollection(handle: {eq: "frontpage"}) {
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

export default Index
