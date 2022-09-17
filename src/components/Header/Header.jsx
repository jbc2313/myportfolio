import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {

  const Nav = styled.nav`
    background-color: black;
    margin: 0;
    padding: 0;
    font-size: larger;
    display: flex;
    justify-content: space-between;
  `
  const NavLinks = styled.div`
    display: flex;

  `
  const PageLink = styled.p`
    margin-left: 5px;
    margin-right: 5px;
    color: white;
  `
  const LogoLink = styled.p`
    margin-left: 9px;
    margin-right: 5px;
    color: white;
  `


  return (
    <Nav>
      <div>
        <LogoLink>J.Corbin</LogoLink>
      </div>
      <NavLinks>
        <Link style={{textDecoration: 'none'}} to='/projects'><PageLink>Projects |</PageLink></Link>
        <Link style={{textDecoration: 'none'}} to='/about'><PageLink>About |</PageLink></Link>
        <Link style={{textDecoration: 'none'}} to='/contact'><PageLink>Contact |</PageLink></Link>
        <Link style={{textDecoration: 'none'}} to='/home'><PageLink>Home</PageLink></Link>
      </NavLinks>

    </Nav>
  )
}

export default Header