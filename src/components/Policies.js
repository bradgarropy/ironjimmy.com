import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import {capitalize} from "../utils/helpers"

const StyledPolicies = styled.div`
    display: grid;
    row-gap: 1rem;
    align-items: start;
`

const Policies = () => {
    const {allShopifyPolicy} = useStaticQuery(query)
    const policies = allShopifyPolicy.edges[0].node.policies

    return (
        <StyledPolicies>
            {policies.map(policy => (
                <Link key={policy.handle} to={`/${policy.handle}`}>
                    {capitalize(policy.title)}
                </Link>
            ))}
        </StyledPolicies>
    )
}

const query = graphql`
    {
        allShopifyPolicy {
            edges {
                node {
                    policies {
                        title
                        handle
                    }
                }
            }
        }
    }
`

export default Policies
