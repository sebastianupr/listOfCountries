import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

const NavbarStyled = styled.nav`
  nav{
    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    justify-content: center;
  }
  background-color: var(--white);
  padding: 15px 0;
  margin-bottom: 30px;
  .title{
    margin: 0px;
    text-align: left !important;
    color: var(--black)
  }
  a{
    text-decoration: none;
    color: #111517;
  }
  text-align: right;
  i{
    display: inline-block;
    margin-right: 5px;
  }
  p{
    display: inline-block;
    margin: 0;
  }
  box-shadow: 0 0 7px 2px rgba(0,0,0,.03);

  .dark-mode-button{
    cursor: pointer;
  }
`

export default function Navbar({darkMode, setDarkMode}) {
  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return <NavbarStyled>
    <div className="container">
      <nav>
        <div>
          <Link to="/">
            <h3 className="title"><strong>Where in the world?</strong></h3>
          </Link>
        </div>
        <div>
          <div className="dark-mode-button" onClick={handleClick}>
            <i className="far fa-moon"></i>
            <p>Dark mode</p>
          </div>
        </div>
      </nav>
    </div>
  </NavbarStyled>
}
