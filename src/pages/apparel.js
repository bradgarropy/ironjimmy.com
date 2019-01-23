import React from "react"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Straps = () => {
    return (
        <Layout>
            <Container>
                <ProductCategoryHeader>
                    <h1>Apparel</h1>
                    <img src="https://downloads.ctfassets.net/d3ttfid6hh7h/5elMgAtAQijXnaxhF8nJaG/03253488203c87a0237f5944c90adde4/DSC04623.jpg"/>
                </ProductCategoryHeader>

                <ProductGrid columns="2">
                    <ProductPreview>
                        <a href="/apparel/tshirt">
                            <img src="https://downloads.ctfassets.net/d3ttfid6hh7h/2LLl2zMhF6mqm80EAaOGms/24a854839313a91a6d5894febf432015/DSC04650.jpg"/>
                        </a>

                        <a href="/apparel/tshirt">
                            <h2>T-Shirt</h2>
                        </a>

                        <p>{displayPrice(20)}</p>
                    </ProductPreview>

                    <ProductPreview>
                        <a href="/apparel/hoodie">
                            <img src="https://images.ctfassets.net/d3ttfid6hh7h/6LV92LcOGo3cfCvDctgvxY/b9e846dbf79d368a2f1cb91fe635f375/DSC04643.jpg"/>
                        </a>

                        <a href="/apparel/hoodie">
                            <h2>Hoodie</h2>
                        </a>

                        <p>{displayPrice(40)}</p>
                    </ProductPreview>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

export default Straps
