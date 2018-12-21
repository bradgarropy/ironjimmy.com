import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import favicon from "../../static/icons/gatsby-icon.png"
import "../scss/Layout.scss"

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Helmet>
                <html lang="en"/>

                <title>Iron Jimmy</title>

                <meta name="description" content="⚫ iron jimmy sleeves"/>
                <meta name="keywords" content="gatsby, react, scss, eslint"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="Iron Jimmy"/>
                <meta
                    name="twitter:description"
                    content="⚫ iron jimmy sleeves"
                />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
                />

                <meta
                    property="og:url"
                    content="https://iron-jimmy.netlify.com/"
                />
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="gatsby starter"/>
                <meta
                    property="og:description"
                    content="⚫ iron jimmy sleeves"
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,w_1800,b_white/gatsby-starter/gatsby-starter.png"
                />

                <link rel="icon" type="image/png" href={favicon}/>
            </Helmet>

            <div className="layout">{children}</div>
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

// export
export default Layout
