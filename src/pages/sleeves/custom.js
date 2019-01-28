import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ProductHeader from "../../styles/ProductHeader"
import ProductForm from "../../styles/ProductForm"
import Colors from "../../components/Colors"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

const Field = styled.div`
    display: grid;
`

const Custom = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/2FjRKCSeKxhkLSTOBszVuJ/cb9cd3cac2845356579138755863c58b/IMG_4774.HEIC"
    const description =
        "Feel like having a \"one of a kind\" sleeve?! Iron Jimmy can bring your custom barbell sleeve to life! It may take some communication to finalize what you want, but we'll make it happen! * You will receive emails to confirm fabric prior to your sleeve being created."
    const price = 90
    const barColors = ["black", "grey"]
    const weights = ["20kg", "15kg"]

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <ProductHeader>
                            <h1>Custom Sleeve</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <Colors title="Bar Color" colors={barColors}/>

                        <ProductForm>
                            <Field>
                                <label>Weight</label>
                                <select>
                                    {weights.map((weight, index) => (
                                        <option key={index} value={weight}>
                                            {weight}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <Field>
                                <label>Tag</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Brand</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Model</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Notes</label>
                                <textarea/>
                            </Field>

                            <AddToCart/>
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Custom.propTypes = {
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

export default Custom
