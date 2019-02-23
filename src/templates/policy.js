import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Container from "../styles/Container"

const PolicyTemplate = ({pageContext}) => {
    const {policy} = pageContext

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
    pageContext: PropTypes.object.isRequired,
}

export default PolicyTemplate
