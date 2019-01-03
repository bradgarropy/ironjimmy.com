import React from "react"
import {Link} from "gatsby"
import "../scss/Navigation.scss"

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/sleeves">Sleeves</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/history">Our History</Link>
        </nav>
    )
}

export default Navigation
