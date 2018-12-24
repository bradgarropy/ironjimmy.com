import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const ApparelTemplate = ({data}) => {
    const apparel = data.contentfulApparel
    const {name, price} = apparel

    return (
        <Layout>
            <div>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
            </div>
        </Layout>
    )
}

ApparelTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        contentfulApparel(contentful_id: {eq: $id}) {
            name
            price
            contentful_id
        }
    }
`

// export
export default ApparelTemplate
