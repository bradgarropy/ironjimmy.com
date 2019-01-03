import React from "react"
import {Link} from "gatsby"
import Logo from "./Logo"
import Navigation from "./Navigation"
import "../scss/Header.scss"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <Logo/>
            </Link>
            <Navigation/>
        </header>
    )
}

export default Header
