import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Carousel from "../components/Carousel"
import Collection from "../components/Collection"
import Container from "../styles/Container"

const CollectionGrid = styled(Container)`
    display: grid;
    row-gap: 5rem;
`

const IndexPage = ({data}) => {
    const collections = data.allShopifyCollection.edges.map(edge => edge.node)
    const carousel = data.allContentfulCarousel.edges[0].node
    const images = carousel.images.map(
        image => `https:${image.fluid.src.split("?")[0]}`,
    )

    return (
        <>
            <Carousel images={images}/>

            <CollectionGrid>
                {collections.map((collection, index) => (
                    <Collection key={index} collection={collection}/>
                ))}
            </CollectionGrid>
        </>
    )
}

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulCarousel {
            edges {
                node {
                    images {
                        fluid(maxWidth: 4096) {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
        allShopifyCollection(
            filter: {handle: {in: ["featured-products", "best-sellers"]}}
        ) {
            edges {
                node {
                    title
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
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 300) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
