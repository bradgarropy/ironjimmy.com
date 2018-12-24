import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import "../scss/Apparel.scss"

const Apparel = ({data}) => {
    const apparel = data.allContentfulApparel.edges

    return (
        <Layout>
            <div className="apparel">
                {apparel.map(item => {
                    const id = item.node.contentful_id
                    const image = item.node.image.file.url
                    const {name, price} = item.node

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

Apparel.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulApparel {
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
export default Apparel
