import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"
import Colors from "../components/Colors"
import AddToCart from "../components/AddToCart"
import {displayPrice} from "../utils/price"

const StrapsTemplate = ({data}) => {
    const {
        images,
        description,
        priceRange,
        title,
        options,
    } = data.shopifyProduct

    const image = images[0].originalSrc
    const price = priceRange.minVariantPrice.amount
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
                            <h1>{title}</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        {options.map((option, index) => {
                            const {name, values} = option

                            if (isColor(name) && !isDefault(name)) {
                                return (
                                    <Colors
                                        key={index}
                                        title={name}
                                        colors={values}
                                    />
                                )
                            }
                        })}

                        <ProductForm>
                            {options.map((option, index) => {
                                const {name, values} = option

                                if (!isColor(name) && !isDefault(name)) {
                                    return (
                                        <Field key={index}>
                                            <label>{name}</label>
                                            <select>
                                                {values.map((value, index) => (
                                                    <option
                                                        key={index}
                                                        value={value}
                                                    >
                                                        {value}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>
                                    )
                                }
                            })}

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

const isDefault = name => {
    return name === "Title"
}

const isColor = name => {
    const matches = ["color", "pattern"]
    name = name.toLowerCase()
    return matches.some(element => name.includes(element))
}

StrapsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($id: String!) {
        shopifyProduct(shopifyId: {eq: $id}) {
            title
            description
            images {
                originalSrc
            }
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            options {
                name
                values
            }
        }
    }
`

export default StrapsTemplate
