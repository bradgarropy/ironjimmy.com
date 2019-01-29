import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ProductHeader from "../../styles/ProductHeader"
import ProductForm from "../../styles/ProductForm"
import Field from "../../styles/Field"
import Colors from "../../components/Colors"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

const Nylon = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/640yVRzrFYuIM2Ew8sSOOC/1274095d33264b89208a061dab57c757/DSC04584.jpg"
    const description =
        "I don't know about y'all but I want more choices! Pick 1 or 2 colors, mix and match how you please! Check out the add on sayings for your straps. You'll never put them on the wrong hand again! 🙌🏼"
    const price = 25
    const colors = ["red", "orange", "yellow", "green", "blue"]
    const words = [
        "",
        "BITCH",
        "DEAD",
        "DREAM",
        "EFFORT",
        "FAMOUS",
        "GYM",
        "HERO",
        "INSTA",
        "KILLER",
        "LEGEND",
        "LIFE",
        "LIFT",
        "LIGHT",
        "LOCAL",
        "LONGER",
        "MAX",
        "PULL",
        "SAVAGE",
        "SLAY",
        "STRAP",
        "UP",
        "WEIGHT",
        "WORK",
    ]

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
                            <h1>Nylon Strap</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <Colors title="Color" colors={colors}/>

                        <ProductForm>
                            <Field>
                                <label>Left</label>
                                <select>
                                    {words.map((word, index) => (
                                        <option key={index} value={word}>
                                            {word}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <Field>
                                <label>Right</label>
                                <select>
                                    {words.map((word, index) => (
                                        <option key={index} value={word}>
                                            {word}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <AddToCart/>
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Nylon.propTypes = {
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

export default Nylon
