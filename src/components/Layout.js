import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import "../scss/Layout.scss"
import logo from "../../static/icons/iron-jimmy-icon.png"

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
                <meta name="twitter:image" content={logo}/>

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
                <meta property="og:image" content={logo}/>

                <link rel="icon" type="image/png" href={logo}/>
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
