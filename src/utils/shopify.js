import Client from "shopify-buy"

const shopify = Client.buildClient({
    domain: "iron-jimmy-sleeves.myshopify.com",
    storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
})

const initializeCart = async() => {
    const id = localStorage.getItem("shopifyCartId")

    if (!id) {
        console.log("🛒⛔")
        const cart = await createCart()
        localStorage.setItem("shopifyCartId", cart.id)
    } else {
        console.log("🛒✨")
    }
}

const createCart = async() => {
    console.log("🛒🔧")
    const cart = await shopify.checkout.create()
    return cart
}

const getCart = async() => {
    console.log("🛒🤲🏼")
    const id = localStorage.getItem("shopifyCartId")
    return await shopify.checkout.fetch(id)
}

const addToCart = async item => {
    console.log("🛒✅")
    const id = localStorage.getItem("shopifyCartId")

    const lineItems = [
        {
            variantId: item,
            quantity: 1,
        },
    ]

    const cart = await shopify.checkout.addLineItems(id, lineItems)
    return cart
}

const removeFromCart = async item => {
    console.log("🛒❌")
    const id = localStorage.getItem("shopifyCartId")
    const lineItems = [item]
    const cart = await shopify.checkout.removeLineItems(id, lineItems)
    return cart
}

export {initializeCart, createCart, getCart, addToCart, removeFromCart}
