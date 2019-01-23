import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import Product from "../../styles/Product"
import ColorGrid from "../../styles/ColorGrid"
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

const Colors = styled.div`
    margin: 3rem 0;
`

const Color = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color};
`

const Limited = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/2FjRKCSeKxhkLSTOBszVuJ/cb9cd3cac2845356579138755863c58b/IMG_4774.HEIC"
    const description =
        "Select your center and sleeve colors, choose the weight of your barbell, and specify the brand and model so I can custom fit your sleeve to your barbell. Don't forget to enter what you want on your custom leather tag!"
    const price = 80
    const sleeveColors = ["red", "orange", "yellow", "green", "blue"]
    const barColors = ["black", "grey"]
    const weights = ["20kg", "15kg"]

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <Title>Limited Sleeve</Title>
                        <p>{displayPrice(price)}</p>

                        <Colors>
                            <label>Sleeve Color</label>
                            <ColorGrid>
                                {sleeveColors.map((color, index) => (
                                    <Color key={index} color={color}/>
                                ))}
                            </ColorGrid>
                        </Colors>

                        <Colors>
                            <label>Bar Color</label>
                            <ColorGrid>
                                {barColors.map((color, index) => (
                                    <Color key={index} color={color}/>
                                ))}
                            </ColorGrid>
                        </Colors>

                        <Form>
                            <Field>
                                <label>Weight</label>
                                <select>
                                    {weights.map((weight, index) => (
                                        <option key={index} value={weight}>
                                            {weight}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <Field>
                                <label>Tag</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Brand</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Model</label>
                                <input type="text"/>
                            </Field>

                            <Field>
                                <label>Notes</label>
                                <textarea/>
                            </Field>

                            <AddToCart/>
                        </Form>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Limited.propTypes = {
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

export default Limited
