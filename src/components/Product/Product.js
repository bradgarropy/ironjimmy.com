import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import CartContext from "../../context/CartContext"
import ProductImages from "./ProductImages"
import ProductMeta from "./ProductMeta"
import ProductColors from "./ProductColors"
import ProductForm from "./ProductForm"
import {getVariant, getProductImages} from "../../utils/shopify"

const StyledProduct = styled.div`
    display: grid;
    grid-template-columns: 65fr 35fr;
    justify-items: center;
    column-gap: 5rem;

    @media (max-width: 850px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Product = ({product}) => {
    const {descriptionHtml, options} = product
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
        <StyledProduct>
            <div>
                <Img fluid={featuredImage} alt={product.title}/>
                <ProductImages
                    product={product}
                    onClick={onProductImageChange}
                />
                <Markdown>{descriptionHtml}</Markdown>
            </div>

            <div>
                <ProductMeta product={product}/>
                <ProductColors product={product} onClick={onColorChange}/>
                <ProductForm
                    product={product}
                    onOptionsChange={onOptionsChange}
                    onAttributesChange={onAttributesChange}
                    onSubmit={onSubmit}
                />
            </div>
        </StyledProduct>
    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product
