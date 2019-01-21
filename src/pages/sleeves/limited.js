import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import ProductGrid from "../../styles/ProductGrid"
import {displayPrice} from "../../utils/price"

const Limited = ({data}) => {
    const sleeves = data.allContentfulSleeves.edges

    return (
        <Layout>
            <Container>
                <h1>Limited Sleeves</h1>

                <ProductGrid>
                    {sleeves.map(sleeve => {
                        const id = sleeve.node.contentful_id
                        const image = sleeve.node.image.file.url
                        const {name, price} = sleeve.node

                        return (
                            <div key={id}>
                                <a href={`/sleeves/${id}`}>
                                    <img src={image}/>
                                </a>

                                <h2>
                                    <a href={`/sleeves/${id}`}>{name}</a>
                                </h2>

                                <p>{displayPrice(price)}</p>
                            </div>
                        )
                    })}
                </ProductGrid>
            </Container>
        </Layout>
    )
}

Limited.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulSleeves {
            edges {
                node {
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    name
                    price
                }
            }
        }
    }
`

export default Limited
