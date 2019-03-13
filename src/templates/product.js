import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import CartContext from "../context/CartContext"
import Colors from "../components/Product/Colors"
import AddToCart from "../components/Product/AddToCart"
import ProductImages from "../components/Product/ProductImages"
import {displayPrice} from "../utils/price"
import {getVariant, getProductImages} from "../utils/shopify"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"

const ProductTemplate = ({pageContext}) => {
    const {product} = pageContext
    const {
        descriptionHtml,
        availableForSale,
        priceRange,
        title,
        options,
        productType,
        tags,
    } = product

    const price = priceRange.minVariantPrice.amount
    const image = getProductImages(product)[0]

    const initialOptions = options.reduce((acc, curr) => {
        const name = curr.name
        const value = curr.values[0]
        acc[name] = value
        return acc
    }, {})

    const [featuredImage, setFeaturedImage] = useState(image)
    const [selectedOptions, setSelectedOptions] = useState(initialOptions)
    const [customAttributes, setCustomAttributes] = useState({})
    const [variant, setVariant] = useState()

    const cartContext = useContext(CartContext)

    useEffect(() => {
        const variant = getVariant(product, selectedOptions)
        setVariant(variant.shopifyId)
    }, [product, selectedOptions])

    const onOptionsChange = event => {
        const {name, value} = event.target
        setSelectedOptions({...selectedOptions, [name]: value})
        return
    }

    const onAttributesChange = event => {
        const {name, value} = event.target
        setCustomAttributes({...customAttributes, [name]: value})
        return
    }

    const onSubmit = event => {
        event.preventDefault()
        const attributes = Object.entries(customAttributes).map(entry => {
            return {key: entry[0], value: entry[1]}
        })
        cartContext.add(variant, attributes)
        return
    }

    const onColorChange = event => {
        const name = event.target.getAttribute("data-name")
        const value = event.target.getAttribute("alt")
        const image = event.target.getAttribute("src")
        setSelectedOptions({...selectedOptions, [name]: value})
        setFeaturedImage(image)
        return
    }

    const onProductImageChange = event => {
        const image = event.target.getAttribute("src")
        setFeaturedImage(image)
        return
    }

    return (
        <>
            <Container>
                <Product>
                    <div>
                        <img src={featuredImage} alt={product.title}/>
                        <ProductImages
                            product={product}
                            onClick={onProductImageChange}
                        />
                        <Markdown>{descriptionHtml}</Markdown>
                    </div>

                    <div>
                        <ProductHeader>
                            <h1>{title}</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

                        <Colors product={product} onClick={onColorChange}/>

                        <ProductForm onSubmit={onSubmit}>
                            {options.map((option, index) => {
                                const {name, values} = option

                                if (!isDefault(name) && !isColor(name)) {
                                    return (
                                        <Field
                                            key={index}
                                            onChange={onOptionsChange}
                                        >
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

                            {/*
                                Custom Club Lifting Strap Color Options
                                - Blazing Blue
                                - Military Green
                                - Hot Pink
                                - Teal
                                - Sand Gold
                                - Maroon
                                - Orange
                                - Black
                                - Sky Blue
                                - Hunter Green
                                - White
                                - Kilo Kolors
                            */}

                            {title === "Custom Club Lifting Straps" && (
                                <>
                                    <Field onChange={onAttributesChange}>
                                        <label>Left Color</label>
                                        <input type="text" name="Left Color"/>
                                    </Field>

                                    <Field onChange={onAttributesChange}>
                                        <label>Right Color</label>
                                        <input type="text" name="Right Color"/>
                                    </Field>

                                    <p>
                                        Email your logo to{" "}
                                        <i>uploads@ironjimmy.com</i>
                                    </p>
                                </>
                            )}

                            {productType.toLowerCase() === "sleeves" && (
                                <>
                                    <Field onChange={onAttributesChange}>
                                        <label>Tag</label>
                                        <input
                                            type="text"
                                            name="Tag"
                                            maxLength="10"
                                        />
                                    </Field>

                                    <Field onChange={onAttributesChange}>
                                        <label>Collar Measurement</label>
                                        <input
                                            type="text"
                                            name="Collar Measurement"
                                        />
                                    </Field>

                                    <Field onChange={onAttributesChange}>
                                        <label>Brand</label>
                                        <input type="text" name="Brand"/>
                                    </Field>

                                    <Field onChange={onAttributesChange}>
                                        <label>Model</label>
                                        <input type="text" name="Model"/>
                                    </Field>

                                    <Field onChange={onAttributesChange}>
                                        <label>Special Instructions</label>
                                        <textarea name="Special Instructions"/>
                                    </Field>
                                </>
                            )}

                            <AddToCart
                                soldOut={!availableForSale}
                                comingSoon={tags.includes("coming-soon")}
                            />
                        </ProductForm>
                    </div>
                </Product>
            </Container>
        </>
    )
}

ProductTemplate.propTypes = {
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

export default ProductTemplate
