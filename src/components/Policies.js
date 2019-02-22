import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import {camelToDash} from "../utils/helpers"

const StyledPolicies = styled.div`
    display: grid;
    row-gap: 1rem;
    align-items: start;
`

const Policies = () => {
    const {allShopifyShopPolicy} = useStaticQuery(query)
    const policies = allShopifyShopPolicy.edges.map(edge => edge.node)

    return (
        <StyledPolicies>
            {policies.map(policy => (
                <Link
                    key={policy.shopifyId}
                    to={`/${camelToDash(policy.type)}`}
                >
                    {policy.title}
                </Link>
            ))}
        </StyledPolicies>
    )
}

const query = graphql`
    {
        allShopifyShopPolicy {
            edges {
                node {
                    shopifyId
                    type
                    title
                }
            }
        }
    }
`

export default Policies
