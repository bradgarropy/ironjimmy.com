import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import("stripe")("sk_test_m51gis4Lr4sqvj291N8BucPW")
import Layout from "../components/Layout"
import SleeveInfo from "../components/SleeveInfo"
import SleeveForm from "../components/SleeveForm"
import "../scss/SleeveTemplate.scss"

class SleeveTemplate extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    onSubmit = event => {
        event.preventDefault()
        console.log("onSubmit")

        fetch("/.netlify/functions/payment")
            .then(response => response.text())
            .then(response => console.log(response))
    }

    render = () => {
        const sleeve = this.props.data.contentfulSleeves
        const image = sleeve.image.file.url

        return (
            <Layout>
                <div className="container sleeve-template">
                    <img src={image}/>

                    <div>
                        <SleeveInfo sleeve={sleeve}/>
                        <SleeveForm onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const query = graphql`
    query($id: String!) {
        contentfulSleeves(contentful_id: {eq: $id}) {
            name
            price
            description {
                description
            }
            image {
                file {
                    url
                }
            }
        }
    }
`

export default SleeveTemplate
