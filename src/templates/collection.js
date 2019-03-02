import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Container from "../styles/Container"
import Collection from "../components/Collection"

const CollectionTemplate = ({pageContext}) => {
    const {collection} = pageContext

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
    {
        shopifyCollection(title: {eq: "Lifting Straps"}) {
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

CollectionTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default CollectionTemplate
