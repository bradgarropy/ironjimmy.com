import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Container from "../styles/Container"
import Button from "../styles/Button"
import Form from "../styles/Form"
import FormField from "../styles/FormField"

const ContactPage = ({data}) => {
    const history = data.allContentfulContact.edges[0].node
    const {description} = history.description

    return (
        <>
            <Container className="contact">
                <Markdown>{description}</Markdown>

                <Form
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact"/>
                    <input type="hidden" name="bot-field"/>

                    <FormField>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name"/>
                    </FormField>

                    <FormField>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </FormField>

                    <FormField>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="7"/>
                    </FormField>

                    <Button>Submit</Button>
                </Form>
            </Container>
        </>
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
