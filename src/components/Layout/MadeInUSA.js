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

    img {
        width: 3rem;
    }
`

const MadeInUSA = () => (
    <StyledMadeInUSA>
        <span>Made in USA</span>
        <img src={usa} alt="American Flag"/>
    </StyledMadeInUSA>
)

export default MadeInUSA
