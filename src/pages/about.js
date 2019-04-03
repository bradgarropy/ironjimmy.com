import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import About from "../components/About"
import Container from "../styles/Container"

const AboutPage = ({data}) => {
    const about = data.allContentfulAbout.edges[0].node

    return (
        <Container>
            <About about={about}/>
        </Container>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulAbout {
            edges {
                node {
                    image {
                        fluid(maxWidth: 500) {
                            ...GatsbyContentfulFluid
                        }
                        file {
                            url
                        }
                    }
                    description {
                        description
                    }
                }
            }
        }
    }
`

export default AboutPage
