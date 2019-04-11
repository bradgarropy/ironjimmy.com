import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Container from "../styles/Container"
import CustomStraps from "../components/CustomStraps"

const CustomStrapsPage = ({data}) => {
    const customStraps = data.allContentfulCustomStraps.edges[0].node

    return (
        <Container>
            <CustomStraps customStraps={customStraps}/>
        </Container>
    )
}

CustomStrapsPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulCustomStraps {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    photos {
                        fluid(maxWidth: 4096) {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

export default CustomStrapsPage
