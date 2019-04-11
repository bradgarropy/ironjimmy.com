import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import NavigationLink from "./NavigationLink"

const StyledNavigation = styled.nav`
    display: grid;
    grid-auto-flow: column;
    column-gap: 2rem;
    row-gap: 1rem;
    justify-content: center;
    justify-self: stretch;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1rem;
    border-top: 2px solid ${({theme}) => theme.colors.black};
    border-bottom: 2px solid ${({theme}) => theme.colors.black};

    a:hover {
        color: white;
    }

    @media (max-width: 950px) {
        grid-auto-flow: row;

        span {
            display: none;
        }
    }
`

const Navigation = () => {
    const data = useStaticQuery(graphql`
        {
            allShopifyCollection(
                filter: {handle: {nin: ["featured-products", "best-sellers"]}}
            ) {
                edges {
                    node {
                        shopifyId
                        handle
                        title
                    }
                }
            }
        }
    `)

    const collections = data.allShopifyCollection.edges.map(edge => edge.node)

    return (
        <StyledNavigation>
            {collections.map(collection => {
                const {shopifyId, handle, title} = collection

                return (
                    <NavigationLink key={shopifyId} url={handle} text={title}/>
                )
            })}

            <NavigationLink url="about" text="About"/>
            <NavigationLink url="contact" text="Contact" separator={false}/>
        </StyledNavigation>
    )
}

export default Navigation
