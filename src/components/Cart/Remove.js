import React, {useContext} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons"
import CartContext from "../../context/CartContext"

const StyledRemove = styled(FontAwesomeIcon)`
    cursor: pointer;
    transition: all 300ms;

    &:hover {
        color: ${({theme}) => theme.colors.red};
    }
`

const Remove = ({item}) => {
    const cartContext = useContext(CartContext)
    const {remove} = cartContext

    const onClick = () => {
        remove(item.id)
        return
    }

    return <StyledRemove icon={faTimesCircle} size="2x" onClick={onClick}/>
}

Remove.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Remove
