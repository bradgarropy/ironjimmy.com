import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Carousel from "../components/Carousel"

const Index = ({data}) => {
    const carousel = data.allContentfulCarousel.edges[0].node
    const images = carousel.images.map(image => `https:${image.file.url}`)

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
