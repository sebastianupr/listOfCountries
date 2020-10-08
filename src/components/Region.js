import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

const RegionStyled = styled.div`
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
    <RegionStyled>
      <select onChange={filterByRegion} value={regionSelected}>
        <option value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </RegionStyled>
  )
}
