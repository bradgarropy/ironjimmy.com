import React from "react"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Straps = () => {
    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/640yVRzrFYuIM2Ew8sSOOC/1274095d33264b89208a061dab57c757/DSC04584.jpg"

    return (
        <Layout>
            <Container>
                <ProductCategoryHeader>
                    <h1>Lifting Straps</h1>
                    <img src="https://images.ctfassets.net/d3ttfid6hh7h/nwnHD3TJ1QWM8g0Mq8M8k/0b07fd540d77d7a32e353a3a9802b6a4/DSC04681.jpg"/>
                </ProductCategoryHeader>

                <ProductGrid columns="2">
                    <ProductPreview>
                        <a href="/straps/nylon">
                            <img src={image}/>
                        </a>

                        <a href="/straps/nylon">
                            <h2>Nylon</h2>
                        </a>

                        <p>{displayPrice(25)}</p>
                    </ProductPreview>

                    <ProductPreview>
                        <a href="/straps/leather">
                            <img src={image}/>
                        </a>

                        <a href="/straps/leather">
                            <h2>Leather</h2>
                        </a>

                        <p>{displayPrice(25)}</p>
                    </ProductPreview>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

export default Straps
