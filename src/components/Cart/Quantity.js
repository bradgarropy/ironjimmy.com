import React, {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import CartContext from "../../context/CartContext"

const StyledQuantity = styled.div`
    margin: 0;
    font-size: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    column-gap: 1.5rem;
`

const QuantityButton = styled.button`
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    font-size: 2.5rem;
`

const Quantity = ({item}) => {
    const cartContext = useContext(CartContext)
    const {update} = cartContext

    const onDecrement = () => {
        const lineItem = {
            id: item.id,
            quantity: item.quantity - 1,
            variantId: item.variant.id,
        }
        update(lineItem)
        return
    }

    const onIncrement = () => {
        const lineItem = {
            id: item.id,
            quantity: item.quantity + 1,
            variantId: item.variant.id,
        }
        update(lineItem)
        return
    }

    return (
        <StyledQuantity>
            <QuantityButton onClick={onDecrement}>-</QuantityButton>
            <span>{item.quantity}</span>
            <QuantityButton onClick={onIncrement}>+</QuantityButton>
        </StyledQuantity>
    )
}

Quantity.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Quantity
