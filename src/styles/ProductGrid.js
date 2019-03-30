import styled from "styled-components"

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
    align-items: end;

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 750px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default ProductGrid
