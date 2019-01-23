import React from "react"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"

const Straps = () => {
    const image =
        "https://downloads.ctfassets.net/d3ttfid6hh7h/2LLl2zMhF6mqm80EAaOGms/24a854839313a91a6d5894febf432015/DSC04650.jpg"

    return (
        <Layout>
            <Container>
                <ProductCategoryHeader>
                    <h1>Apparel</h1>
                </ProductCategoryHeader>

                <ProductGrid columns="2">
                    <ProductPreview>
                        <a href="/apparel/tshirt">
                            <img src={image}/>
                        </a>

                        <a href="/apparel/tshirt">
                            <h2>T-Shirt</h2>
                        </a>
                    </ProductPreview>

                    <ProductPreview>
                        <a href="/apparel/hoodie">
                            <img src={image}/>
                        </a>

                        <a href="/apparel/hoodie">
                            <h2>Hoodie</h2>
                        </a>
                    </ProductPreview>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

export default Straps
