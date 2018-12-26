import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const ApparelTemplate = ({data}) => {
    const apparel = data.contentfulApparel

    const {name, price} = apparel
    const image = apparel.image.file.url
    const description = apparel.description.description

    return (
        <Layout>
            <div>
                <img src={image}/>
                <h2>{name}</h2>
                <p>${price.toFixed(2)}</p>
                <p>{description}</p>
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
export default ApparelTemplate
