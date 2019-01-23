import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import Colors from "../../components/Colors"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

const Title = styled.h1`
    margin: 0 0 2rem 0;
`

const Form = styled.form`
    display: grid;
    row-gap: 2rem;
    margin: 3rem 0;
`

const Field = styled.div`
    display: grid;
`

const Leather = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/6LV92LcOGo3cfCvDctgvxY/b9e846dbf79d368a2f1cb91fe635f375/DSC04643.jpg"
    const description = "Cozy comfy hoodie with our logo on it."
    const price = 40
    const colors = ["red", "orange", "yellow", "green", "blue"]

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <Title>Hoodie</Title>
                        <p>{displayPrice(price)}</p>

                        <Colors title="Color" colors={colors}/>

                        <Form>
                            <AddToCart/>
                        </Form>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Leather.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulSleeves {
            edges {
                node {
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    name
                    price
                }
            }
        }
    }
`

export default Leather
