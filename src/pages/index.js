import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const Index = ({data}) => {
    const home = data.allContentfulHome.edges[0].node
    const images = home.images.map(image => image.file.url)

    return (
        <Layout>
            {images.map((image, index) => (
                <img key={index} src={image}/>
            ))}
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
                    images {
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
