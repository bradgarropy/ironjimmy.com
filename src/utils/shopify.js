import Client from "shopify-buy"
import isEqual from "lodash.isequal"

const shopify = Client.buildClient({
    domain: "iron-jimmy-sleeves.myshopify.com",
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const createCart = async() => {
    console.log("🛒🔧")
    const cart = await shopify.checkout.create()
    return cart
}

const getCart = async() => {
    console.log("🛒🤲🏼")
    let cart = {}

    const id = localStorage.getItem("shopifyCartId")

    if (!id) {
        console.log("🛒⛔")
        cart = await createCart()
        localStorage.setItem("shopifyCartId", cart.id)
    } else {
        console.log("🛒✨")
        cart = await shopify.checkout.fetch(id)
    }

    return cart
}

const addToCart = async(variant, attributes = {}) => {
    console.log("🛒✅")
    const id = localStorage.getItem("shopifyCartId")

    const lineItems = [
        {
            variantId: variant,
            quantity: 1,
            customAttributes: attributes,
        },
    ]

    const cart = await shopify.checkout.addLineItems(id, lineItems)
    return cart
}

const removeFromCart = async lineItem => {
    console.log("🛒❌")
    const id = localStorage.getItem("shopifyCartId")
    const lineItems = [lineItem]
    const cart = await shopify.checkout.removeLineItems(id, lineItems)
    return cart
}

const updateLineItem = async lineItem => {
    console.log("🛒📝")
    const id = localStorage.getItem("shopifyCartId")
    const lineItems = [lineItem]
    const cart = await shopify.checkout.updateLineItems(id, lineItems)
    return cart
}

const getVariant = (product, options) => {
    const variant = shopify.product.helpers.variantForOptions(product, options)
    return variant
}

const getProductImages = product => {
    const allImages = product.images.map(
        image => image.localFile.childImageSharp.fluid,
    )

    const variantImages = getVariantImages(product)

    const productImages = allImages.filter(
        image =>
            !variantImages.some(variantImage => variantImage.src === image.src),
    )

    return productImages
}

const getVariantImages = product => {
    const images = product.images.map(
        image => image.localFile.childImageSharp.fluid,
    )

    const variantImages = product.variants.map(
        variant => variant.image.localFile.childImageSharp.fluid,
    )

    const same = variantImages.every(
        variantImage =>
            isEqual(variantImage, variantImages[0]) &&
            isEqual(variantImage, images[0]),
    )

    if (same) {
        return []
    }

    return variantImages
}

const getColors = product => {
    const colors = product.variants.reduce((acc, curr) => {
        const {selectedOptions} = curr
        const colorOption = selectedOptions.find(selectedOption =>
            ["color", "pattern"].includes(selectedOption.name.toLowerCase()),)

        if (!colorOption) {
            return acc
        }

        const color = {
            name: colorOption.name,
            value: colorOption.value,
            image: curr.image.localFile.childImageSharp.fluid,
        }

        !acc.some(element => element.value === color.value) && acc.push(color)
        return acc
    }, [])

    return colors
}

export {
    createCart,
    getCart,
    addToCart,
    removeFromCart,
    updateLineItem,
    getVariant,
    getProductImages,
    getVariantImages,
    getColors,
}
