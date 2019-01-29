import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import Markdown from "markdown-to-jsx"

const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
`

const About = ({data}) => {
    const about = data.allContentfulAbout.edges[0].node
    const image = about.image.file.url
    const description = about.description.description

    return (
        <Layout>
            <Container>
                <StyledAbout>
                    <img src={image}/>
                    <Markdown>{description}</Markdown>
                </StyledAbout>
            </Container>
        </Layout>
    )
}

About.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulAbout {
            edges {
                node {
                    image {
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

export default About
