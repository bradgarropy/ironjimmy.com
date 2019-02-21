import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Container from "../styles/Container"

class PolicyTemplate extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render = () => {
        const policy = this.props.data.shopifyShopPolicy

        return (
            <Layout>
                <Container>
                    <h1>{policy.title}</h1>
                    <p>{policy.body}</p>
                </Container>
            </Layout>
        )
    }
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
