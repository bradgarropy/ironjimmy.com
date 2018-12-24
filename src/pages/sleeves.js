import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
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
                            <img src={image}/>
                            <h2>{name}</h2>
                            <p>${price.toFixed(2)}</p>
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
