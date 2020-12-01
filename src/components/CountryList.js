import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './Country'
import { useSelector, useDispatch } from 'react-redux'
import getCountries from 'src/services/getCountries'

const CountryListStyled = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr;
  grid-row-gap: 2.3em;
  grid-template-columns: 1fr;
  @media (min-width: 576px){
    grid-template-columns: repeat(2, minmax(280px, 1fr));
  }
  @media (min-width: 992px){
    grid-template-columns: repeat(3, minmax(280px, 1fr));
  }
  @media (min-width: 1200px){
    grid-template-columns: repeat(4, minmax(280px, 1fr));
  }
  margin: 0 auto;
  justify-content: center;
  background: var(--background);
  padding: 1.3em 2em;
`

export default function CountryList() {
  const dispatch = useDispatch()
  const countriesSearch = useSelector(state => state.countriesSearch)

  useEffect(() => {
    getCountries()
      .then(countries =>
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: countries
        })
      )
  }, [])

  return (
    <div className="continer">
      <CountryListStyled>
        {
          countriesSearch.map(({ name, flag, population, region, capital }) =>
            <Country
              key={name}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />
          )
        }
      </CountryListStyled>
    </div>
  )
}
