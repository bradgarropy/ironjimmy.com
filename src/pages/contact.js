import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import "../scss/Contact.scss"

const Contact = ({data}) => {
    const history = data.allContentfulContact.edges[0].node
    const {description} = history.description

    return (
        <Layout>
            <Container className="contact">
                <Markdown>{description}</Markdown>

                <form
                    className="contact-form"
                    name="contact"
                    method="post"
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="contact"/>

                    <div className="contact-form-field">
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </div>

                    <div className="contact-form-field">
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </div>

                    <div className="contact-form-field">
                        <label>Message</label>
                        <textarea name="message" rows="7"/>
                    </div>

                    <button>Submit</button>
                </form>
            </Container>
        </Layout>
    )
}

Contact.propTypes = {
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

export default Contact
