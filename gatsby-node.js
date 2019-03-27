const path = require("path")

const createPages = async({graphql, actions}) => {
    const {createPage} = actions
    let response = null

    response = await graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        handle
                        title
                        productType
                        tags
                        descriptionHtml
                        availableForSale
                        images {
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 650) {
                                        base64
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                }
                            }
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
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 650) {
                                            base64
                                            aspectRatio
                                            src
                                            srcSet
                                            sizes
                                        }
                                    }
                                }
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
                            localFile {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
                                        base64
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                }
                            }
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
                                localFile {
                                    childImageSharp {
                                        fluid(maxWidth: 300) {
                                            base64
                                            aspectRatio
                                            src
                                            srcSet
                                            sizes
                                        }
                                    }
                                }
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
        if (collection.handle !== "frontpage") {
            const slug = collection.handle.split("-").pop()

            createPage({
                path: slug,
                component: path.resolve("./src/templates/collection.js"),
                context: {collection},
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
