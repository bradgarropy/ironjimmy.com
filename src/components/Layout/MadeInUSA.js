import React from "react"
import styled from "styled-components"
import usa from "../../../static/images/usa.svg"

const StyledMadeInUSA = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    align-content: start;
    align-items: center;
    column-gap: 0.5rem;
    font-weight: 600;
    text-transform: uppercase;

    img {
        width: 3rem;
    }
`

const MadeInUSA = () => (
    <StyledMadeInUSA>
        <img src={usa} alt="American Flag"/>
        <span>Made In USA</span>
    </StyledMadeInUSA>
)

export default MadeInUSA
