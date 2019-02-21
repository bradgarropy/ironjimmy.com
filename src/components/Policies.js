import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import {camelToDash} from "../utils/helpers"

const StyledPolicies = styled.div`
    display: grid;
    row-gap: 1rem;
    align-items: start;
`

const Policies = () => {
    return (
        <StaticQuery query={query}>
            {data => {
                const policies = data.allShopifyShopPolicy.edges.map(
                    edge => edge.node,
                )

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
            }}
        </StaticQuery>
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
