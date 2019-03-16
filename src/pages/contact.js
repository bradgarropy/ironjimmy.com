import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Container from "../styles/Container"
import Button from "../styles/Button"
import Form from "../styles/Form"
import FormField from "../styles/FormField"

const Contact = ({data}) => {
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
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </FormField>

                    <FormField>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </FormField>

                    <FormField>
                        <label>Message</label>
                        <textarea name="message" rows="7"/>
                    </FormField>

                    <Button>Submit</Button>
                </Form>
            </Container>
        </>
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
