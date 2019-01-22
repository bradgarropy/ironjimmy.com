import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import ProductGrid from "../styles/ProductGrid"
import {displayPrice} from "../utils/price"

const Header = styled.div`
    margin-bottom: 3rem;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
`

const StrapType = styled.div``

const Straps = () => {
    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/640yVRzrFYuIM2Ew8sSOOC/1274095d33264b89208a061dab57c757/DSC04584.jpg"

    return (
        <Layout>
            <Container>
                <Header>
                    <Title>Lifting Straps</Title>
                    <img src="https://images.ctfassets.net/d3ttfid6hh7h/nwnHD3TJ1QWM8g0Mq8M8k/0b07fd540d77d7a32e353a3a9802b6a4/DSC04681.jpg"/>
                </Header>

                <ProductGrid columns="2">
                    <StrapType>
                        <a href="/straps/nylon">
                            <img src={image}/>
                        </a>

                        <a href="/straps/nylon">
                            <h2>Nylon</h2>
                        </a>

                        <p>{displayPrice(25)}</p>
                    </StrapType>

                    <StrapType>
                        <a href="/straps/leather">
                            <img src={image}/>
                        </a>

                        <a href="/straps/leather">
                            <h2>Leather</h2>
                        </a>

                        <p>{displayPrice(25)}</p>
                    </StrapType>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

export default Straps
