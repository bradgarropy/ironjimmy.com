import React from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import {capitalize} from "../utils/helpers"
import Container from "../styles/Container"

const PolicyTemplate = ({pageContext}) => {
    const {policy} = pageContext

    return (
        <>
            <Container>
                <h1>{capitalize(policy.title)}</h1>
                <Markdown>{policy.body}</Markdown>
            </Container>
        </>
    )
}

PolicyTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default PolicyTemplate
