import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Layout from "../components/Layout"
import "../scss/History.scss"

const History = ({data}) => {
    const history = data.allContentfulHistory.edges

    return (
        <Layout>
            <div className="history">
                {history.map(section => {
                    const id = section.node.contentful_id
                    const image = section.node.image.file.url
                    const {header} = section.node
                    const description = section.node.description.description

                    return (
                        <div key={id}>
                            <h2
                                className="history-section-header"
                                style={{backgroundImage: `url(${image})`}}
                            >
                                {header}
                            </h2>
                            <Markdown>{description}</Markdown>
                        </div>
                    )
                })}
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
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    header
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
