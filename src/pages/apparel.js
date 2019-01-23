import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"

const Header = styled.div`
    margin-bottom: 3rem;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
`

const Straps = () => {
    const image =
        "https://downloads.ctfassets.net/d3ttfid6hh7h/2LLl2zMhF6mqm80EAaOGms/24a854839313a91a6d5894febf432015/DSC04650.jpg"

    return (
        <Layout>
            <Container>
                <Header>
                    <Title>Apparel</Title>
                </Header>

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
