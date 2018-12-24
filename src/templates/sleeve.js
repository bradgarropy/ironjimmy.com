import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const SleeveTemplate = ({data}) => {
    const sleeve = data.contentfulSleeves
    const {name, price} = sleeve

    return (
        <Layout>
            <div>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
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
            contentful_id
        }
    }
`

// export
export default SleeveTemplate
