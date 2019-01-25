import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ProductHeader from "../../styles/ProductHeader"
import Colors from "../../components/Colors"
import AddToCart from "../../components/AddToCart"
import {displayPrice} from "../../utils/price"

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
        "https://downloads.ctfassets.net/d3ttfid6hh7h/2LLl2zMhF6mqm80EAaOGms/24a854839313a91a6d5894febf432015/DSC04650.jpg"
    const description = "Dope t-shirt with our logo on it."
    const price = 20
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
                        <ProductHeader>
                            <h1>T-Shirt</h1>
                            <p>{displayPrice(price)}</p>
                        </ProductHeader>

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
