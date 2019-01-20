import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import {displayPrice} from "../../utils/price"

const StyledSleeves = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
`

const Solid = ({data}) => {
    const sleeves = data.allContentfulSleeves.edges

    return (
        <Layout>
            <Container>
                <h1>Solid Sleeves</h1>
                <StyledSleeves>
                    {sleeves.map(sleeve => {
                        const id = sleeve.node.contentful_id
                        const image = sleeve.node.image.file.url
                        const {name, price} = sleeve.node

                        return (
                            <div key={id}>
                                <a href={`/sleeves/${id}`}>
                                    <img src={image}/>
                                </a>

                                <h2>
                                    <a href={`/sleeves/${id}`}>{name}</a>
                                </h2>

                                <p>{displayPrice(price)}</p>
                            </div>
                        )
                    })}
                </StyledSleeves>
            </Container>
        </Layout>
    )
}

Solid.propTypes = {
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

export default Solid
