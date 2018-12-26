import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"

const StrapTemplate = ({data}) => {
    const strap = data.contentfulStraps

    const {name, price} = strap
    const image = strap.image.file.url
    const description = strap.description.description

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

StrapTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        contentfulStraps(contentful_id: {eq: $id}) {
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
export default StrapTemplate
