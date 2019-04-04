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

module.exports = {
    siteMetadata: {
        siteUrl: "https://ironjimmy.com/",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-robots-txt",
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
                accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
                verbose: true,
            },
        },
        {
            resolve: "gatsby-source-apiserver",
            options: {
                url:
                    "https://iron-jimmy-sleeves.myshopify.com/admin/policies.json",
                name: "ShopifyPolicy",
                auth: {
                    username: process.env.SHOPIFY_ADMIN_API_KEY,
                    password: process.env.SHOPIFY_ADMIN_API_PASSWORD,
                },
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/Layout/Layout.js"),
            },
        },
        {
            resolve: "gatsby-transformer-sharp",
        },
        {
            resolve: "gatsby-plugin-sharp",
        },
    ],
}
