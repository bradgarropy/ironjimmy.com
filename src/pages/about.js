import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Container from "../styles/Container"
import Markdown from "markdown-to-jsx"

const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const About = ({data}) => {
    const about = data.allContentfulAbout.edges[0].node
    const image = `https:${about.image.file.url}`
    const description = about.description.description

    return (
        <>
            <Container>
                <StyledAbout>
                    <img src={image} alt="About Iron Jimmy"/>
                    <Markdown>{description}</Markdown>
                </StyledAbout>
            </Container>
        </>
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
