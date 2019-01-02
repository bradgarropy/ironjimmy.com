import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import formatPrice from "../utils/price"
import "../scss/ApparelTemplate.scss"

const ApparelTemplate = ({data}) => {
    const apparel = data.contentfulApparel

    const {name, price} = apparel
    const image = apparel.image.file.url
    const description = apparel.description.description

    return (
        <Layout>
            <div className="apparel-template">
                <img src={image}/>
                <div className="apparel-template-info">
                    <h2>{name}</h2>
                    <p>${formatPrice(price)}</p>
                    <p>{description}</p>
                    <button>Buy</button>
                </div>
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
