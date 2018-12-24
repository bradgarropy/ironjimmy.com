import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const StrapTemplate = ({data}) => {
    const strap = data.contentfulStraps
    const {name, price} = strap

    return (
        <Layout>
            <div>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
            </div>
        </Layout>
    )
}

StrapTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        contentfulStraps(contentful_id: {eq: $id}) {
            name
            price
            contentful_id
        }
    }
`

// export
export default StrapTemplate
