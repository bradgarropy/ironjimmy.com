require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

let contentfulOptions

if (process.env.CONTEXT === "production") {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        host: process.env.CONTENTFUL_HOST,
    }
} else {
    contentfulOptions = {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
        host: process.env.CONTENTFUL_PREVIEW_HOST,
    }
}

const proxy = require("http-proxy-middleware")

module.exports = {
    developMiddleware: app => {
        app.use(
            "/.netlify/functions/",
            proxy({
                target: "http://localhost:9000",
                pathRewrite: {
                    "/.netlify/functions/": "",
                },
            }),
        )
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: ["roboto"],
            },
        },
        {
            resolve: "gatsby-plugin-sass",
        },
        {
            resolve: "gatsby-plugin-styled-components",
        },
        {
            resolve: "gatsby-source-contentful",
            options: contentfulOptions,
        },
        {
            resolve: "gatsby-source-shopify",
            options: {
                shopName: "iron-jimmy-sleeves",
                accessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                verbose: true,
            },
        },
    ],
}
