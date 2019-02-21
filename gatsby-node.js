const path = require("path")
const helpers = require("./src/utils/helpers")

const createPages = async({graphql, actions}) => {
    const {createPage} = actions
    let response = null

    response = await graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        productType
                        handle
                    }
                }
            }
        }
    `)

    const products = response.data.allShopifyProduct.edges.map(
        edge => edge.node,
    )

    products.forEach(product => {
        const shopifyId = product.shopifyId
        const slug = product.handle
        const type = product.productType.toLowerCase()

        createPage({
            path: `${type}/${slug}`,
            component: path.resolve(`./src/templates/${type}.js`),
            context: {shopifyId},
        })
    })

    response = await graphql(`
        {
            allShopifyShopPolicy {
                edges {
                    node {
                        shopifyId
                        type
                    }
                }
            }
        }
    `)

    const policies = response.data.allShopifyShopPolicy.edges.map(
        edge => edge.node,
    )

    policies.forEach(policy => {
        const {type, shopifyId} = policy

        createPage({
            path: helpers.camelToDash(type),
            component: path.resolve("./src/templates/policy.js"),
            context: {shopifyId},
        })
    })

    return
}

module.exports = {createPages}
