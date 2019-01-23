import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {displayPrice} from "../../utils/price"

const Product = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
`

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

const Colors = styled.div`
    margin: 3rem 0;
`

const ColorGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    column-gap: 2rem;
    row-gap: 2rem;
    justify-content: start;
`

const Color = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color};
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
                        <Title>T-Shirt</Title>
                        <p>{displayPrice(price)}</p>

                        <Colors>
                            <label>Color</label>
                            <ColorGrid>
                                {colors.map((color, index) => (
                                    <Color key={index} color={color}/>
                                ))}
                            </ColorGrid>
                        </Colors>

                        <Form>
                            <button>
                                <FontAwesomeIcon icon={faCartPlus}/> Add To
                                Cart
                            </button>
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
