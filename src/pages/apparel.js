import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import formatPrice from "../utils/price"
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
                            <a href={`/apparel/${id}`}>
                                <img src={image}/>
                            </a>

                            <h2>
                                <a href={`/apparel/${id}`}>{name}</a>
                            </h2>

                            <p>{formatPrice(price)}</p>
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
