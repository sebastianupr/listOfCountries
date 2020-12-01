import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import Region from './Region'

export const NavSearchAndFilterStyled = styled.div`
  background-color: var(--background);
  @media (min-width: 576px){
    div.nav-content{
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: 60% 40%;
    }
  }
`

export default function NavSearchAndFilter() {
  return (
      <NavSearchAndFilterStyled>
        <div className="container">
          <div className="nav-content">
            <div>
              <Search />
            </div>
            <div>
              <Region />
            </div>
          </div>
        </div>
      </NavSearchAndFilterStyled>
  )
}
