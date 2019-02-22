import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Container from "../styles/Container"

const PolicyTemplate = ({data}) => {
    const policy = data.shopifyShopPolicy

    return (
        <Layout>
            <Container>
                <h1>{policy.title}</h1>
                <p>{policy.body}</p>
            </Container>
        </Layout>
    )
}

PolicyTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($shopifyId: String!) {
        shopifyShopPolicy(shopifyId: {eq: $shopifyId}) {
            title
            body
        }
    }
`

export default PolicyTemplate
