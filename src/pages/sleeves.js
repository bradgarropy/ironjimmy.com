import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Container from "../styles/Container"
import Collection from "../components/Collection"

const Sleeves = ({data}) => {
    const collection = data.shopifyCollection

    return (
        <>
            <Container>
                <Collection collection={collection}/>
            </Container>
        </>
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
