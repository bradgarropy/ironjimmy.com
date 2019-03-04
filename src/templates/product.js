import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import CartContext from "../context/CartContext"
import Colors from "../components/Product/Colors"
import AddToCart from "../components/Product/AddToCart"
import ProductImages from "../components/Product/ProductImages"
import {displayPrice} from "../utils/price"
import {getVariant} from "../utils/shopify"
import Container from "../styles/Container"
import Product from "../styles/Product"
import ProductHeader from "../styles/ProductHeader"
import ProductForm from "../styles/ProductForm"
import Field from "../styles/Field"

const ProductTemplate = ({pageContext}) => {
    const {product} = pageContext
    const {
        description,
        availableForSale,
        priceRange,
        title,
        options,
        variants,
    } = product
    const images = product.images.map(image => image.originalSrc)

    const variantImages = variants.reduce((acc, curr) => {
        const image = curr.image.originalSrc
        !acc.includes(image) && acc.push(image)
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

    const cartContext = useContext(CartContext)

    useEffect(() => {
        const variant = getVariant(product, selectedOptions)
        setVariant(variant.shopifyId)
    }, [selectedOptions])

    const onSubmit = event => {
        event.preventDefault()
        cartContext.add(variant)
        return
    }

    const onChange = event => {
        const {name, value} = event.target
        setOptions({...selectedOptions, [name]: value})
        return
    }

    return (
        <>
            <Container>
                <Product>
                    <div>
                        <ProductImages images={images}/>
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

                            <AddToCart soldOut={!availableForSale}/>
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
