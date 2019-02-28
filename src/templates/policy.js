import React from "react"
import PropTypes from "prop-types"
import Container from "../styles/Container"

const PolicyTemplate = ({pageContext}) => {
    const {policy} = pageContext

    return (
        <>
            <Container>
                <h1>{policy.title}</h1>
                <p>{policy.body}</p>
            </Container>
        </>
    )
}

PolicyTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default PolicyTemplate
