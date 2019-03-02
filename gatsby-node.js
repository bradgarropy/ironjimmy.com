const path = require("path")

const createPages = async({graphql, actions}) => {
    const {createPage} = actions
    let response = null

    response = await graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        productType
                        handle
                        title
                        description
                        images {
                            originalSrc
                        }
                        priceRange {
                            minVariantPrice {
                                amount
                            }
                        }
                        options {
                            name
                            values
                        }
                        variants {
                            shopifyId
                            selectedOptions {
                                name
                                value
                            }
                            image {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    `)

    const products = response.data.allShopifyProduct.edges.map(
        edge => edge.node,
    )

    products.forEach(product => {
        const slug = product.handle
        const type = product.productType.toLowerCase()

        createPage({
            path: `${type}/${slug}`,
            component: path.resolve("./src/templates/product.js"),
            context: {product},
        })
    })

    response = await graphql(`
        {
            allShopifyCollection {
                edges {
                    node {
                        handle
                        title
                        image {
                            src
                        }
                        products {
                            shopifyId
                            title
                            handle
                            productType
                            priceRange {
                                minVariantPrice {
                                    amount
                                }
                            }
                            images {
                                originalSrc
                            }
                        }
                    }
                }
            }
        }
    `)

    const collections = response.data.allShopifyCollection.edges.map(
        edge => edge.node,
    )

    collections.forEach(collection => {
        const slug = collection.handle.split("-").pop()

        createPage({
            path: slug,
            component: path.resolve("./src/templates/collection.js"),
            context: {collection},
        })
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
