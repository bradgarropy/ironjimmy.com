import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import SleeveInfo from "../components/SleeveInfo"
import SleeveForm from "../components/SleeveForm"
import "../scss/SleeveTemplate.scss"

class SleeveTemplate extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    render = () => {
        const sleeve = this.props.data.contentfulSleeves
        const image = sleeve.image.file.url

        return (
            <Layout>
                <Container className="sleeve-template">
                    <img src={image}/>

                    <div>
                        <SleeveInfo sleeve={sleeve}/>
                        <SleeveForm sleeve={sleeve}/>
                    </div>
                </Container>
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
