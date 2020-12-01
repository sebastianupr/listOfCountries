import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const RegionStyled = styled.select`
  display: inline-flex;
  background-color: var(--white);
  align-content: flex-end;
  align-items: center;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, .05);
  border-radius: 5px;
  padding: 0 1rem;
  border: none;
  width: 50%;
  text-align: left;
  font-size: .9em;
  height: 50px;
  color: var(--black);
  @media (min-width: 576px){
    float: right;
    width: 150px;
  }
`

export default function Region() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)
  const regionSelected = useSelector(state => state.regionSelected)

  const filterByRegion = e => {
    const regionSelected = e.target.value
    if(regionSelected.length > 0){
      const countriesByRegion = countries.filter(country => country.region === regionSelected)

      dispatch({
        type: 'SET_COUNTRY_BY_REGION',
        payload: { countriesByRegion, regionSelected}
      })
    }
  }

  return (
    <>
      <RegionStyled onChange={filterByRegion} value={regionSelected}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </RegionStyled>
    </>
  )
}
