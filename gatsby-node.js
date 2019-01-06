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
            }
        `).then(result => {
            const sleeves = result.data.allContentfulSleeves.edges

            sleeves.forEach(({node}) => {
                const id = node.contentful_id

                createPage({
                    path: `sleeves/${id}`,
                    component: path.resolve("./src/templates/sleeve.js"),
                    context: {id},
                })
            })

            resolve()
        })
    })
}
