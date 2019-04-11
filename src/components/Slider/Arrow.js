import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons"

const ArrowWrapper = styled.div`
    cursor: pointer;
    color: ${({theme}) => theme.colors.black};
    padding: 3rem;
    justify-self: ${({direction}) => direction};
`

const Arrow = ({direction, ...props}) => {
    let icon

    switch (direction) {
        case "left":
            icon = faChevronLeft
            break
        case "right":
            icon = faChevronRight
            break
    }

    return (
        <ArrowWrapper direction={direction} {...props}>
            <FontAwesomeIcon icon={icon} size="3x"/>
        </ArrowWrapper>
    )
}

Arrow.propTypes = {
    direction: PropTypes.oneOf(["left", "right"]),
}

export default Arrow
