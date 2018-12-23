import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import "../scss/Apparel.scss"

const Apparel = ({data}) => {
    const apparel = data.allContentfulApparel.edges

    return (
        <Layout>
            {apparel.map(item => {
                const id = item.node.contentful_id
                const image = item.node.image.file.url
                const {name, price} = item.node
                const description = item.node.description.description

                return (
                    <div key={id} className="apparel">
                        <img src={image}/>
                        <h2>{name}</h2>
                        <p>{price}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
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
                    description {
                        description
                    }
                }
            }
        }
    }
`

// export
export default Apparel
