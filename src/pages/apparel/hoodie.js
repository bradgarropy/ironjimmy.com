import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ProductHeader from "../../styles/ProductHeader"
import ProductForm from "../../styles/ProductForm"
import Field from "../../styles/Field"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

const Leather = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/6LV92LcOGo3cfCvDctgvxY/b9e846dbf79d368a2f1cb91fe635f375/DSC04643.jpg"
    const description = "Cozy comfy hoodie with our logo on it."
    const price = 40
    const sizes = ["XS", "S", "M", "L", "XL"]

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
                            <h1>Hoodie</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <ProductForm>
                            <Field>
                                <label>Size</label>
                                <select>
                                    {sizes.map((size, index) => (
                                        <option key={index} value={size}>
                                            {size}
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

Leather.propTypes = {
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

export default Leather
