import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const SleeveTemplate = ({data}) => {
    const sleeve = data.contentfulSleeves

    const {name, price} = sleeve
    const image = sleeve.image.file.url
    const description = sleeve.description.description

    return (
        <Layout>
            <div>
                <img src={image}/>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
                <p>{description}</p>
                <button>Buy</button>
            </div>
        </Layout>
    )
}

SleeveTemplate.propTypes = {
    data: PropTypes.object.isRequired,
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

// export
export default SleeveTemplate
