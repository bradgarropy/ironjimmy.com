import React from "react"
import Button from "../../styles/Button"
import Form from "../../styles/Form"
import FormField from "../../styles/FormField"

const ContactForm = () => {
    return (
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
                <input type="text" id="name" name="name" required/>
            </FormField>

            <FormField>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </FormField>

            <FormField>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="7" required/>
            </FormField>

            <Button>Submit</Button>
        </Form>
    )
}

export default ContactForm
