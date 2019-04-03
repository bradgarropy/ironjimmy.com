import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Carousel from "../components/Carousel"
import Collection from "../components/Collection"
import Container from "../styles/Container"

const IndexPage = ({data}) => {
    const carousel = data.allContentfulCarousel.edges[0].node
    const images = carousel.images.map(image => `https:${image.fluid.src}`)
    const collection = data.shopifyCollection

    return (
        <>
            <Carousel images={images}/>

            <Container>
                <Collection collection={collection}/>
            </Container>
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
        shopifyCollection(handle: {eq: "frontpage"}) {
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
`

export default IndexPage
