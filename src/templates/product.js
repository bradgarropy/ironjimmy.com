import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Container from "../styles/Container"
import StyledProduct from "../components/Product/Product"

const ProductTemplate = ({data}) => {
    const product = data.shopifyProduct

    return (
        <Container>
            <StyledProduct product={product}/>
        </Container>
    )
}

ProductTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($shopifyId: String!) {
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
            shopifyId
            handle
            title
            productType
            tags
            descriptionHtml
            availableForSale
            images {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 650) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            options {
                name
                values
            }
            variants {
                shopifyId
                selectedOptions {
                    name
                    value
                }
                image {
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 650) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

export default ProductTemplate
