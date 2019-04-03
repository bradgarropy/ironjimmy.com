import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Contact from "../components/Contact/Contact"
import Container from "../styles/Container"

const ContactPage = ({data}) => {
    const contact = data.allContentfulContact.edges[0].node

    return (
        <Container>
            <Contact contact={contact}/>
        </Container>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulContact {
            edges {
                node {
                    description {
                        description
                    }
                }
            }
        }
    }
`

export default ContactPage
