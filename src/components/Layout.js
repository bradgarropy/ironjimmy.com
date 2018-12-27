import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Icon from "../../static/icons/iron-jimmy-icon.png"
import "../scss/Layout.scss"

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Helmet>
                <html lang="en"/>

                <title>Iron Jimmy</title>

                <meta name="description" content="⚫ Iron Jimmy Sleeves"/>
                <meta name="keywords" content="gatsby, react, scss, eslint"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="Iron Jimmy"/>
                <meta
                    name="twitter:description"
                    content="⚫ Iron Jimmy Sleeves"
                />
                <meta
                    name="twitter:image"
                    content="https://images.ctfassets.net/d3ttfid6hh7h/3AjiFEmNzaKqCaEkK6cukS/c762918a62d55964bcac6aa2eeeed38f/iron-jimmy-sleeves.png?fit=pad&w=4000&h=2000&bg=rgb:ffffff"
                />

                <meta
                    property="og:url"
                    content="https://iron-jimmy.netlify.com/"
                />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Iron Jimmy"/>
                <meta
                    property="og:description"
                    content="⚫ Iron Jimmy Sleeves"
                />
                <meta
                    property="og:image"
                    content="https://images.ctfassets.net/d3ttfid6hh7h/3AjiFEmNzaKqCaEkK6cukS/c762918a62d55964bcac6aa2eeeed38f/iron-jimmy-sleeves.png?fit=pad&w=4000&h=2000&bg=rgb:ffffff"
                />

                <link rel="icon" type="image/png" href={Icon}/>
            </Helmet>

            <div className="layout">
                <Header/>
                <main className="content">{children}</main>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

// export
export default Layout
