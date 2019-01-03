import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const Index = ({data}) => {
    const home = data.allContentfulHome.edges[0].node
    const image = home.image.file.url

    return (
        <Layout>
            <img src={image}/>
        </Layout>
    )
}

Index.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulHome {
            edges {
                node {
                    image {
                        file {
                            url
                        }
                    }
                }
            }
        }
    }
`

export default Index
