import styled from "styled-components"

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.columns || "3"}, 1fr);
    column-gap: 5rem;
    row-gap: 5rem;
    align-items: end;
`

export default ProductGrid
