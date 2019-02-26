import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"
import Colors from "../components/Colors"
import AddToCart from "../components/AddToCart"
import {displayPrice} from "../utils/price"
import {addToCart, getVariant} from "../utils/shopify"

const SleevesTemplate = ({pageContext}) => {
    const {product} = pageContext
    const {images, description, priceRange, title, options, variants} = product

    const variantImages = variants.reduce((acc, curr) => {
        const image = curr.image.originalSrc
        !acc.includes(image) && acc.push(image)
        return acc
    }, [])

    const productImages = images.reduce((acc, curr) => {
        const image = curr.originalSrc
        !variantImages.includes(image) && acc.push(image)
        return acc
    }, [])

    const initialOptions = options.reduce((acc, curr) => {
        const name = curr.name
        const value = curr.values[0]
        acc[name] = value
        return acc
    }, {})

    const price = priceRange.minVariantPrice.amount

    const [selectedOptions, setOptions] = useState(initialOptions)
    const [variant, setVariant] = useState()

    useEffect(() => {
        const variant = getVariant(product, selectedOptions)
        setVariant(variant.shopifyId)
    }, [selectedOptions])

    const onSubmit = event => {
        event.preventDefault()
        addToCart(variant)
        return
    }

    const onChange = event => {
        const {name, value} = event.target
        setOptions({...selectedOptions, [name]: value})
        return
    }

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <Image src={productImages[0]}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <ProductHeader>
                            <h1>{title}</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <Colors images={variantImages}/>

                        <ProductForm onSubmit={onSubmit}>
                            {options.map((option, index) => {
                                const {name, values} = option

                                if (!isDefault(name)) {
                                    return (
                                        <Field key={index} onChange={onChange}>
                                            <label>{name}</label>
                                            <select name={name}>
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

                            {/* <Field>
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
                            </Field> */}

                            <AddToCart/>
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

SleevesTemplate.propTypes = {
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

export default SleevesTemplate
