import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import Container from "../styles/Container"
import Button from "../styles/Button"

const ContactForm = styled.form`
    display: grid;
    grid-template-columns: repeat(1, auto);
    row-gap: 3rem;
    justify-items: center;
    margin: 3rem 0;
`

const ContactFormField = styled.div`
    max-width: 500px;
    width: 100%;
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 1rem;
`

const Contact = ({data}) => {
    const history = data.allContentfulContact.edges[0].node
    const {description} = history.description

    return (
        <>
            <Container className="contact">
                <Markdown>{description}</Markdown>

                <ContactForm
                    name="contact"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="contact"/>
                    <input type="hidden" name="bot-field"/>

                    <ContactFormField>
                        <label>Name</label>
                        <input type="text" name="name"/>
                    </ContactFormField>

                    <ContactFormField>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </ContactFormField>

                    <ContactFormField>
                        <label>Message</label>
                        <textarea name="message" rows="7"/>
                    </ContactFormField>

                    <Button>Submit</Button>
                </ContactForm>
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
