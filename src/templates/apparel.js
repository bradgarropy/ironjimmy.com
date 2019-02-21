import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"
import AddToCart from "../components/AddToCart"
import {displayPrice} from "../utils/price"

class ApparelTemplate extends React.Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
    }

    handleSubmit = async event => {
        event.preventDefault()
        console.log("handleSubmit!")
    }

    render = () => {
        const {
            images,
            description,
            priceRange,
            title,
            options,
        } = this.props.data.shopifyProduct

        const image = images[0].originalSrc
        const price = priceRange.minVariantPrice.amount

        return (
            <Layout>
                <Container>
                    <Product>
                        <div>
                            <Image src={image}/>
                            <p>{description}</p>
                        </div>

                        <div>
                            <ProductHeader>
                                <h1>{title}</h1>
                                <p>{displayPrice(price)}</p>
                            </ProductHeader>

                            <ProductForm onSubmit={this.handleSubmit}>
                                {options.map((option, index) => {
                                    const {name, values} = option

                                    if (!isColor(name) && !isDefault(name)) {
                                        return (
                                            <Field key={index}>
                                                <label>{name}</label>
                                                <select>
                                                    {values.map(
                                                        (value, index) => (
                                                            <option
                                                                key={index}
                                                                value={value}
                                                            >
                                                                {value}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                            </Field>
                                        )
                                    }
                                })}

                                <AddToCart/>
                            </ProductForm>
                        </div>
                    </Product>
                </Container>
            </Layout>
        )
    }
}

const isDefault = name => {
    return name === "Title"
}

const isColor = name => {
    const matches = ["color", "pattern"]
    name = name.toLowerCase()
    return matches.some(element => name.includes(element))
}

export const query = graphql`
    query($shopifyId: String!) {
        shopifyProduct(shopifyId: {eq: $shopifyId}) {
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

export default ApparelTemplate
