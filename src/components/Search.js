import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Input from './Input';

export default function Search() {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries)

  const searchCountry = search => {
    const term = new RegExp(search, "i")
    const countriesSearch = countries.filter(country => term.exec(country.name))

    dispatch({
      type: 'SET_COUNTRY_SEARCH',
      payload: countriesSearch
    })
  }

  return <Input searchCountry={searchCountry} />
}
