const path = require("path")

const createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const products = graphql(`
        {
            allShopifyProduct {
                edges {
                    node {
                        shopifyId
                        productType
                        handle
                        title
                    }
                }
            }
        }
    `).then(result => {
        const products = result.data.allShopifyProduct.edges

        products.forEach(({node}) => {
            const id = node.shopifyId
            const slug = node.handle
            const type = node.productType.toLowerCase()

            switch (type) {
                case "sleeves":
                    createPage({
                        path: `${type}/${slug}`,
                        component: path.resolve("./src/templates/sleeves.js"),
                        context: {id},
                    })
                    break
                case "straps":
                    createPage({
                        path: `${type}/${slug}`,
                        component: path.resolve("./src/templates/straps.js"),
                        context: {id},
                    })
                    break
                case "apparel":
                    createPage({
                        path: `${type}/${slug}`,
                        component: path.resolve("./src/templates/apparel.js"),
                        context: {id},
                    })
                    break
            }
        })
    })

    return Promise.all([products])
}

module.exports = {createPages}
