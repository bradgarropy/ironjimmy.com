import React, {useState, useEffect, useContext} from "react"
import PropTypes from "prop-types"
import {navigate} from "gatsby"
import CartContext from "./CartContext"
import ProductContext from "./ProductContext"
import {getVariant, getProductImages} from "../utils/shopify"

const ProductProvider = ({product, children}) => {
    const {options} = product
    const image = getProductImages(product)[0]

    const initialOptions = options.reduce((acc, curr) => {
        const name = curr.name
        const value = curr.values[0]
        acc[name] = value
        return acc
    }, {})

    const [selectedOptions, setSelectedOptions] = useState(initialOptions)
    const [customAttributes, setCustomAttributes] = useState({})
    const [featuredImage, setFeaturedImage] = useState(image)
    const [variant, setVariant] = useState()

    const cartContext = useContext(CartContext)

    useEffect(() => {
        const variant = getVariant(product, selectedOptions)
        setVariant(variant.shopifyId)
    }, [product, selectedOptions])

    const onProductImageChange = image => {
        setFeaturedImage(image)
        return
    }

    const onColorChange = color => {
        const {name, value, image} = color
        setSelectedOptions({...selectedOptions, [name]: value})
        setFeaturedImage(image)
        return
    }

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

    const onSubmit = async event => {
        event.preventDefault()

        const attributes = Object.entries(customAttributes).map(entry => {
            return {key: entry[0], value: entry[1]}
        })

        await cartContext.add(variant, attributes)
        navigate("/cart")
        return
    }

    const context = {
        product,
        featuredImage,
        onProductImageChange,
        onColorChange,
        onOptionsChange,
        onAttributesChange,
        onSubmit,
    }

    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}

ProductProvider.propTypes = {
    product: PropTypes.object.isRequired,
    children: PropTypes.node,
}

export default ProductProvider
