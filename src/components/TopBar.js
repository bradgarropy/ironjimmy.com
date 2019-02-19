import React from "react"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

const StyledTopBar = styled.a`
    justify-self: right;
    margin: 2rem 2rem 0 0;
    text-transform: uppercase;
    font-weight: 600;
`

class TopBar extends React.Component {
    state = {
        link: "#",
        items: 0,
    }

    componentDidMount = async() => {
        // retrieve cart
        // set link
        return
    }

    render = () => {
        return (
            <StyledTopBar href={this.state.link}>
                <FontAwesomeIcon icon={faShoppingCart}/> Cart
            </StyledTopBar>
        )
    }
}

export default TopBar
