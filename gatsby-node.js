const path = require("path")

const createPages = async({graphql, actions}) => {
    const {createPage} = actions
    let response = null

    response = await graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        handle
                        productType
                    }
                }
            }
        }
    `)

    const products = response.data.allShopifyProduct.edges.map(
        edge => edge.node,
    )

    products.forEach(product => {
        const {shopifyId, handle, productType} = product
        const type = productType.toLowerCase()

        createPage({
            path: `${type}/${handle}`,
            component: path.resolve("./src/templates/product.js"),
            context: {shopifyId},
        })
    })

    response = await graphql(`
        {
            allShopifyCollection {
                edges {
                    node {
                        shopifyId
                        handle
                    }
                }
            }
        }
    `)

    const collections = response.data.allShopifyCollection.edges.map(
        edge => edge.node,
    )

    collections.forEach(collection => {
        const {shopifyId, handle} = collection

        if (handle !== "frontpage") {
            const slug = handle.split("-").pop()

            createPage({
                path: slug,
                component: path.resolve("./src/templates/collection.js"),
                context: {shopifyId},
            })
        }
    })

    response = await graphql(`
        {
            allShopifyPolicy {
                edges {
                    node {
                        policies {
                            handle
                            title
                            body
                        }
                    }
                }
            }
        }
    `)

    const edges = response.data.allShopifyPolicy.edges.filter(edge =>
        edge.node.policies ? true : false,)
    const policies = edges[0].node.policies

    policies.forEach(policy => {
        createPage({
            path: policy.handle,
            component: path.resolve("./src/templates/policy.js"),
            context: {policy},
        })
    })

    return
}

module.exports = {createPages}
