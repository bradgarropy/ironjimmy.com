import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {displayPrice} from "../../utils/price"
import Quantity from "./Quantity"
import Remove from "./Remove"

const StyledLineItems = styled.div`
    display: grid;
    row-gap: 5rem;
`

const LineItem = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    column-gap: 5rem;
    align-items: start;
    justify-items: center;
`

const LineItemImage = styled.img`
    width: 6rem;
`

const LineItemTitle = styled.p`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
`

const LineItemVariant = styled.p`
    margin: 0 0 0.75rem 0;
    color: ${({theme}) => theme.colors.grey};
`

const LineItemAttribute = styled.p`
    margin: 0;
    color: ${({theme}) => theme.colors.grey};
`

const LineItemPrice = styled.p`
    margin: 0;
    font-size: 2rem;
`

const LineItems = ({cart}) => {
    return (
        <StyledLineItems>
            {cart.lineItems.map(item => {
                return (
                    <LineItem key={item.id}>
                        <LineItemImage src={item.variant.image.src}/>

                        <div>
                            <LineItemTitle>{item.title}</LineItemTitle>

                            <LineItemVariant>
                                {item.variant.title}
                            </LineItemVariant>

                            {item.customAttributes.map(attribute => (
                                <LineItemAttribute key={attribute.key}>
                                    {attribute.key}: {attribute.value}
                                </LineItemAttribute>
                            ))}
                        </div>

                        <LineItemPrice>
                            {displayPrice(item.variant.price)}
                        </LineItemPrice>

                        <Quantity item={item}/>
                        <Remove item={item}/>
                    </LineItem>
                )
            })}
        </StyledLineItems>
    )
}

LineItems.propTypes = {
    cart: PropTypes.object.isRequired,
}

export default LineItems
