import React from "react"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Sleeves = () => {
    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/2FjRKCSeKxhkLSTOBszVuJ/cb9cd3cac2845356579138755863c58b/IMG_4774.HEIC"

    return (
        <Layout>
            <Container>
                <ProductCategoryHeader>
                    <h1>Barbell Sleeves</h1>
                    <img src="https://downloads.ctfassets.net/d3ttfid6hh7h/2bsz5m0iNGso0gGwQAYKMG/f19930b27510d63779354fa17c999d19/DSC04732.jpg"/>
                </ProductCategoryHeader>

                <ProductGrid>
                    <ProductPreview>
                        <a href="/sleeves/solid">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/solid">
                            <h2>Solid</h2>
                        </a>

                        <p>{displayPrice(70)}</p>
                    </ProductPreview>

                    <ProductPreview>
                        <a href="/sleeves/limited">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/limited">
                            <h2>Limited</h2>
                        </a>

                        <p>{displayPrice(80)}</p>
                    </ProductPreview>

                    <ProductPreview>
                        <a href="/sleeves/custom">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/custom">
                            <h2>Custom</h2>
                        </a>

                        <p>{displayPrice(90)}</p>
                    </ProductPreview>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

export default Sleeves
