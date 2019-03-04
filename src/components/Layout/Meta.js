import React from "react"
import Helmet from "react-helmet"
import Icon from "../../../static/icons/iron-jimmy-icon.png"

const Meta = () => {
    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/3AjiFEmNzaKqCaEkK6cukS/c762918a62d55964bcac6aa2eeeed38f/iron-jimmy-sleeves.png?fit=pad&w=4000&h=2000&bg=rgb:ffffff"

    return (
        <Helmet
            htmlAttributes={{lang: "en"}}
            title="Iron Jimmy"
            link={[
                {
                    rel: "icon",
                    type: "image/png",
                    href: Icon,
                },
            ]}
            meta={[
                {
                    name: "description",
                    content: "⚫ Iron Jimmy Sleeves",
                },
                {
                    name: "keywords",
                    content: "gatsby, react, scss, eslint",
                },
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:site",
                    content: "@bradgarropy",
                },
                {
                    name: "twitter:creator",
                    content: "@bradgarropy",
                },
                {
                    name: "twitter:title",
                    content: "Iron Jimmy",
                },
                {
                    name: "twitter:description",
                    content: "⚫ Iron Jimmy Sleeves",
                },
                {
                    name: "twitter:image",
                    content: image,
                },
                {
                    property: "og:url",
                    content: "https://iron-jimmy.netlify.com/",
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content: "Iron Jimmy",
                },
                {
                    property: "og:description",
                    content: "⚫ Iron Jimmy Sleeves",
                },
                {
                    property: "og:image",
                    content: image,
                },
            ]}
        />
    )
}

export default Meta
