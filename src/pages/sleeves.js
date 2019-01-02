import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import formatPrice from "../utils/price"
import "../scss/Sleeves.scss"

const Sleeves = ({data}) => {
    const sleeves = data.allContentfulSleeves.edges

    return (
        <Layout>
            <div className="sleeves">
                {sleeves.map(sleeve => {
                    const id = sleeve.node.contentful_id
                    const image = sleeve.node.image.file.url
                    const {name, price} = sleeve.node

                    return (
                        <div key={id}>
                            <a href={`/sleeves/${id}`}>
                                <img src={image}/>
                            </a>

                            <h2>
                                <a href={`/sleeves/${id}`}>{name}</a>
                            </h2>

                            <p>{formatPrice(price)}</p>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

Sleeves.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulSleeves {
            edges {
                node {
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    name
                    price
                }
            }
        }
    }
`

// export
export default Sleeves
