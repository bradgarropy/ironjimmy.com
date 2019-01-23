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

const Nylon = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/640yVRzrFYuIM2Ew8sSOOC/1274095d33264b89208a061dab57c757/DSC04584.jpg"
    const description =
        "I don't know about y'all but I want more choices! Pick 1 or 2 colors, mix and match how you please! Check out the add on sayings for your straps. You'll never put them on the wrong hand again! 🙌🏼"
    const price = 25
    const colors = ["red", "orange", "yellow", "green", "blue"]
    const sayings = [
        "MAX EFFORT",
        "LIFT BITCH",
        "PULL LONGER",
        "STRAP UP",
        "DEAD LIFT",
        "SLAY BITCH",
        "LOCAL LEGEND",
        "GYM HERO",
        "SAVAGE LIFE",
        "LIGHT WEIGHT",
        "LIFT SAVAGE",
        "DREAM KILLER",
        "INSTA FAMOUS",
        "WORK BITCH",
    ]

    return (
        <Layout>
            <Container>
                <Product>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <Title>Nylon Strap</Title>
                        <p>{displayPrice(price)}</p>

                        <Colors title="Color" colors={colors}/>

                        <Form>
                            <Field>
                                <label>Sayings</label>
                                <select>
                                    {sayings.map((saying, index) => (
                                        <option key={index} value={saying}>
                                            {saying}
                                        </option>
                                    ))}
                                </select>
                            </Field>

                            <AddToCart/>
                        </Form>
                    </div>
                </Product>
            </Container>
        </Layout>
    )
}

Nylon.propTypes = {
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

export default Nylon
