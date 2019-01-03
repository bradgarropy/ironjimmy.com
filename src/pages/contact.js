import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Markdown from "markdown-to-jsx"
import Layout from "../components/Layout"
import "../scss/Contact.scss"

const Contact = ({data}) => {
    const history = data.allContentfulContact.edges[0].node
    const {description} = history.description

    return (
        <Layout>
            <div className="contact">
                <Markdown>{description}</Markdown>

                <form className="contact-form">
                    <div className="contact-form-field">
                        <label>Name</label>
                        <input type="text"/>
                    </div>

                    <div className="contact-form-field">
                        <label>Email</label>
                        <input type="email"/>
                    </div>

                    <div className="contact-form-field">
                        <label>Message</label>
                        <textarea rows="7"/>
                    </div>

                    <button>Submit</button>
                </form>
            </div>
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

// export
export default Contact
