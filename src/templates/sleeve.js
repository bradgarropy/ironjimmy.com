import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import formatPrice from "../utils/price"
import "../scss/SleeveTemplate.scss"

const SleeveTemplate = ({data}) => {
    const sleeve = data.contentfulSleeves

    const {name, price} = sleeve
    const image = sleeve.image.file.url
    const description = sleeve.description.description

    return (
        <Layout>
            <div className="container sleeve-template">
                <img src={image}/>

                <div>
                    <div className="sleeve-template-info">
                        <h2>{name}</h2>
                        <p>{formatPrice(price)}</p>
                        <p>{description}</p>
                    </div>

                    <div className="sleeve-template-form">
                        <div className="sleeve-template-form-field">
                            <label>Weight</label>
                            <select>
                                <option value="20">20KG</option>
                                <option value="15">15KG</option>
                            </select>
                        </div>

                        <div className="sleeve-template-form-field">
                            <label>Brand</label>
                            <input type="text"/>
                        </div>

                        <div className="sleeve-template-form-field">
                            <label>Model</label>
                            <input type="text"/>
                        </div>

                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

SleeveTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        contentfulSleeves(contentful_id: {eq: $id}) {
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
            color {
                name
                image {
                    file {
                        url
                    }
                }
            }
        }
    }
`

export default SleeveTemplate
