import React from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import {capitalize} from "../utils/helpers"

const Policy = ({policy}) => {
    return (
        <>
            <h1>{capitalize(policy.title)}</h1>
            <Markdown>{policy.body}</Markdown>
        </>
    )
}

Policy.propTypes = {
    policy: PropTypes.object.isRequired,
}

export default Policy
