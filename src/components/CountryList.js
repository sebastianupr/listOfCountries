import React, { useEffect } from 'react'
import styled from 'styled-components'
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux'
import Region from './Region';
import Search from './Search';

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  padding: 4em 2em;
`

export default function CountryList() {

  const dispatch = useDispatch()
  const countriesSearch = useSelector(state => state.countriesSearch)

  useEffect(function () {

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(allCountries =>
        dispatch({
          type: 'SET_COUNTRY_LIST',
          payload: allCountries
        })
      )
      .catch(() => console.log('Error'))
  }, [])

  return (
    <CountryListStyled>
      <Search />
      <Region />
      <>
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
      </>
    </CountryListStyled>
  )
}
