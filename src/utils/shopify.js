import Client from "shopify-buy"

const shopify = Client.buildClient({
    domain: "iron-jimmy-sleeves.myshopify.com",
    storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const createClient = () => {
    const shopify = Client.buildClient({
        domain: "iron-jimmy-sleeves.myshopify.com",
        storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    })

    return shopify
}

const initializeCart = async() => {
    const cartId = localStorage.getItem("shopifyCartId")

    if (!cartId) {
        console.log("🛒⛔")
        const cart = await createCart()
        console.log(`🛒🔧 ${cart.id}`)
        localStorage.setItem("shopifyCartId", cart.id)
    } else {
        console.log(`🛒✨ ${cartId}`)
    }
}

const createCart = async() => {
    const cart = await shopify.checkout.create()
    return cart
}

const getCart = async() => {
    const id = localStorage.getItem("shopifyCartId")
    const cart = await shopify.checkout.fetch(id)
    return cart
}

const addToCart = async(cartId, item) => {
    const lineItems = [
        {
            variantId: item,
            quantity: 1,
        },
    ]

    const cart = await shopify.checkout.addLineItems(cartId, lineItems)
    return cart
}

const removeFromCart = async(cartId, item) => {
    const lineItems = [item]
    const cart = await shopify.checkout.removeLineItems(cartId, lineItems)
    return cart
}

export {
    createClient,
    initializeCart,
    createCart,
    getCart,
    addToCart,
    removeFromCart,
}
