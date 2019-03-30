import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import Markdown from "markdown-to-jsx"
import styled from "styled-components"
import Img from "gatsby-image"
import CartContext from "../context/CartContext"
import Colors from "../components/Product/Colors"
import AddToCart from "../components/Product/AddToCart"
import ProductImages from "../components/Product/ProductImages"
import {displayPrice} from "../utils/price"
import {getVariant, getProductImages} from "../utils/shopify"
import Container from "../styles/Container"
import Form from "../styles/Form"
import FormField from "../styles/FormField"

const Product = styled.div`
    display: grid;
    grid-template-columns: 65fr 35fr;
    column-gap: 5rem;
`

const ProductHeader = styled.div`
    h1 {
        margin: 0 0 0.5rem 0;
    }

    p {
        margin: 0;
        color: ${({theme}) => theme.colors.grey};
    }
`

const ProductForm = styled(Form)`
    justify-items: stretch;

    p {
        margin: 0;
    }
`

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

    const onColorChange = color => {
        const {name, value, image} = color
        setSelectedOptions({...selectedOptions, [name]: value})
        setFeaturedImage(image)
        return
    }

    const onProductImageChange = image => {
        setFeaturedImage(image)
        return
    }

    return (
        <>
            <Container>
                <Product>
                    <div>
                        <Img fluid={featuredImage} alt={product.title}/>
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
                                        <FormField
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
                                        </FormField>
                                    )
                                }
                            })}

                            {tags.includes("custom-color") && (
                                <>
                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="left-color">
                                            Left Color
                                        </label>
                                        <input
                                            type="text"
                                            id="left-color"
                                            name="Left Color"
                                        />
                                    </FormField>

                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="right-color">
                                            Right Color
                                        </label>
                                        <input
                                            type="text"
                                            id="right-color"
                                            name="Right Color"
                                        />
                                    </FormField>
                                </>
                            )}

                            {tags.includes("custom-image") && (
                                <p>
                                    Email your logo to{" "}
                                    <i>uploads@ironjimmy.com</i>
                                </p>
                            )}

                            {productType.toLowerCase() === "sleeves" && (
                                <>
                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="tag">Tag</label>
                                        <input
                                            type="text"
                                            id="tag"
                                            name="Tag"
                                            maxLength="10"
                                        />
                                    </FormField>

                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="collar-measurement">
                                            *Collar Measurement
                                        </label>
                                        <input
                                            type="text"
                                            id="collar-measurement"
                                            name="Collar Measurement"
                                            required
                                        />
                                    </FormField>

                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="brand">*Brand</label>
                                        <input
                                            type="text"
                                            id="brand"
                                            name="Brand"
                                            required
                                        />
                                    </FormField>

                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="model">Model</label>
                                        <input
                                            type="text"
                                            id="model"
                                            name="Model"
                                        />
                                    </FormField>

                                    <FormField onChange={onAttributesChange}>
                                        <label htmlFor="special-instructions">
                                            Special Instructions
                                        </label>
                                        <textarea
                                            id="special-instructions"
                                            name="Special Instructions"
                                        />
                                    </FormField>
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
