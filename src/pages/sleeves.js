import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../styles/Container"
import {displayPrice} from "../utils/price"

const Header = styled.div`
    margin-bottom: 3rem;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
`

const SleeveTypes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
`

const SleeveType = styled.div``

const Sleeves = () => {
    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/2FjRKCSeKxhkLSTOBszVuJ/cb9cd3cac2845356579138755863c58b/IMG_4774.HEIC"

    return (
        <Layout>
            <Container>
                <Header>
                    <Title>Barbell Sleeves</Title>
                    <img src="https://downloads.ctfassets.net/d3ttfid6hh7h/2bsz5m0iNGso0gGwQAYKMG/f19930b27510d63779354fa17c999d19/DSC04732.jpg"/>
                </Header>

                <SleeveTypes>
                    <SleeveType>
                        <a href="/sleeves/solid">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/solid">
                            <h2>Solid</h2>
                        </a>

                        <p>{displayPrice(70)}</p>
                    </SleeveType>

                    <SleeveType>
                        <a href="/sleeves/limited">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/limited">
                            <h2>Limited</h2>
                        </a>

                        <p>{displayPrice(80)}</p>
                    </SleeveType>

                    <SleeveType>
                        <a href="/sleeves/custom">
                            <img src={image}/>
                        </a>

                        <a href="/sleeves/custom">
                            <h2>Custom</h2>
                        </a>

                        <p>{displayPrice(90)}</p>
                    </SleeveType>
                </SleeveTypes>
            </Container>
        </Layout>
    )
}

export default Sleeves
