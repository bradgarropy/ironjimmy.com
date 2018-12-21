import React from "react"
import Layout from "../components/Layout"
import Logo from "../components/Logo"
import Social from "../components/Social"

const Index = () => {
    return (
        <Layout>
            <a href="https://www.instagram.com/iron_jimmy_sleeves/">
                <Social className="a"/>
            </a>
            <Logo className="b"/>
        </Layout>
    )
}

// export
export default Index
