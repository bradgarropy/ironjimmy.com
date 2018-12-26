import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Layout from "../components/Layout"

const History = ({data}) => {
    const history = data.allContentfulHistory.edges[0].node
    const {description} = history.description

    return (
        <Layout>
            <div className="history">
                <Markdown>{description}</Markdown>
            </div>
        </Layout>
    )
}

History.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulHistory {
            edges {
                node {
                    description {
                        description
                    }
                }
            }
        }
    }
`

// export
export default History
