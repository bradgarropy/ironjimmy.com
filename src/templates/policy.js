import React from "react"
import PropTypes from "prop-types"
import Policy from "../components/Policy"
import Container from "../styles/Container"

const PolicyTemplate = ({pageContext}) => {
    const {policy} = pageContext

    return (
        <Container>
            <Policy policy={policy}/>
        </Container>
    )
}

PolicyTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default PolicyTemplate
