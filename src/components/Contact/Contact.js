import React from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import ContactForm from "./ContactForm"

const Contact = ({contact}) => {
    const {description} = contact.description

    return (
        <>
            <Markdown>{description}</Markdown>
            <ContactForm/>
        </>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Contact
