import React, {useState} from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"
import AddToCart from "../components/AddToCart"
import {displayPrice} from "../utils/price"
import {addToCart} from "../utils/shopify"

const ApparelTemplate = ({pageContext}) => {
    const [variant, setVariant] = useState(
        "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xNDM3NzA4NjcxMzkyMg==",
    )

    const handleSubmit = event => {
        event.preventDefault()
        addToCart(variant)
        return
    }

    const {
        images,
        description,
        priceRange,
        title,
        options,
    } = pageContext.product

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

                        <ProductForm onSubmit={handleSubmit}>
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

                            <AddToCart/>
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

ApparelTemplate.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

const isDefault = name => {
    return name === "Title"
}

const isColor = name => {
    const matches = ["color", "pattern"]
    name = name.toLowerCase()
    return matches.some(element => name.includes(element))
}

export default ApparelTemplate
