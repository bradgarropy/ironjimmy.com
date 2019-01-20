import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import Container from "../styles/Container"

const Header = styled.div`
    margin-bottom: 3rem;
`

const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
`

const StrapTypes = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
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
                </Header>

                <StrapTypes>
                    <StrapType>
                        <a href="/straps/nylon">
                            <img src={image}/>
                        </a>

                        <a href="/straps/nylon">
                            <h2>Nylon</h2>
                        </a>
                    </StrapType>

                    <StrapType>
                        <a href="/straps/leather">
                            <img src={image}/>
                        </a>

                        <a href="/straps/leather">
                            <h2>Leather</h2>
                        </a>
                    </StrapType>
                </StrapTypes>
            </Container>
        </Layout>
    )
}

export default Straps
