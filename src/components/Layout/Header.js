import React, {useState} from "react"
import styled from "styled-components"
import CartButton from "../Cart/CartButton"
import Logo from "./Logo"
import Hamburger from "../Navigation/Hamburger"
import Navigation from "../Navigation/Navigation"
import MobileNavigation from "../Navigation/MobileNavigation"

const StyledHeader = styled.header`
    display: grid;
    width: 100%;
    margin: 0 1rem 0 1rem;
    background: ${({theme}) => theme.colors.red};
    border-bottom: 2px solid ${({theme}) => theme.colors.black};
`

const TopBar = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    align-items: center;
    margin: 2rem 2rem 0 2rem;
`

const Header = () => {
    const [open, setOpen] = useState(false)

    const toggleNavigation = () => {
        setOpen(!open)
        return
    }

    return (
        <StyledHeader>
            <TopBar>
                <Hamburger onClick={toggleNavigation}/>
                <CartButton/>
            </TopBar>
            <Logo/>
            <Navigation/>
            {open && <MobileNavigation/>}
        </StyledHeader>
    )
}

export default Header
