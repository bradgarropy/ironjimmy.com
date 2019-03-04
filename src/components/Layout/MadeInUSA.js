import React from "react"
import styled from "styled-components"
import usa from "../../../static/images/usa.svg"

const StyledMadeInUSA = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    column-gap: 0.5rem;
    margin-left: 3rem;
    font-weight: 600;
    text-transform: uppercase;

    img {
        width: 3rem;
    }
`

const MadeInUSA = () => (
    <StyledMadeInUSA>
        <img src={usa}/>
        <span>Made In USA</span>
    </StyledMadeInUSA>
)

export default MadeInUSA
