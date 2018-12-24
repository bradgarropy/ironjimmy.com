import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import "../scss/Straps.scss"

const Straps = ({data}) => {
    const straps = data.allContentfulStraps.edges

    return (
        <Layout>
            <div className="straps">
                {straps.map(strap => {
                    const id = strap.node.contentful_id
                    const image = strap.node.image.file.url
                    const {name, price} = strap.node

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

Straps.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulStraps {
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
export default Straps
