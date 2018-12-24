const path = require("path")

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allContentfulSleeves {
                    edges {
                        node {
                            contentful_id
                        }
                    }
                }
                allContentfulStraps {
                    edges {
                        node {
                            contentful_id
                        }
                    }
                }
                allContentfulApparel {
                    edges {
                        node {
                            contentful_id
                        }
                    }
                }
            }
        `).then(result => {
            const sleeves = result.data.allContentfulSleeves.edges
            const straps = result.data.allContentfulStraps.edges
            const apparel = result.data.allContentfulApparel.edges

            sleeves.forEach(({node}) => {
                const id = node.contentful_id

                createPage({
                    path: `sleeves/${id}`,
                    component: path.resolve("./src/templates/sleeve.js"),
                    context: {id},
                })
            })

            straps.forEach(({node}) => {
                const id = node.contentful_id

                createPage({
                    path: `straps/${id}`,
                    component: path.resolve("./src/templates/strap.js"),
                    context: {id},
                })
            })

            apparel.forEach(({node}) => {
                const id = node.contentful_id

                createPage({
                    path: `apparel/${id}`,
                    component: path.resolve("./src/templates/apparel.js"),
                    context: {id},
                })
            })

            resolve()
        })
    })
}
