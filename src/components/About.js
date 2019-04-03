import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"

const StyledAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const About = ({about}) => {
    const image = about.image.fluid
    const description = about.description.description

    return (
        <StyledAbout>
            <Img fluid={image}/>
            <Markdown>{description}</Markdown>
        </StyledAbout>
    )
}

About.propTypes = {
    about: PropTypes.object.isRequired,
}

export default About
