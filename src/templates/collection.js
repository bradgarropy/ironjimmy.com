import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Container from "../styles/Container"
import Collection from "../components/Collection"

const CollectionTemplate = ({data}) => {
    const collection = data.shopifyCollection
    console.log(collection)
    console.log(collection.image)

    return (
        <Container>
            <Collection collection={collection}/>
        </Container>
    )
}

CollectionTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($shopifyId: String!) {
        shopifyCollection(shopifyId: {eq: $shopifyId}) {
            shopifyId
            handle
            title
            image {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
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

export default CollectionTemplate
