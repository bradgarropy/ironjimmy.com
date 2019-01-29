import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

const Index = ({data}) => {
    const home = data.allContentfulCarousel.edges[0].node
    const images = home.images.map(image => image.file.url)

    return (
        <Layout>
            <Carousel images={images}/>
        </Layout>
    )
}

Index.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulCarousel {
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
