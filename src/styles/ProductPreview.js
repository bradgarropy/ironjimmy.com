import styled from "styled-components"

const ProductPreview = styled.div`
    h2 {
        margin: 1rem 0 0.5rem 0;
    }

    p {
        margin: 0;
        color: ${({theme}) => theme.colors.grey};
    }
`

export default ProductPreview
