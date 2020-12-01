import React, { useEffect, useState } from 'react'
import getSingleCountry from 'src/services/getSingleCountry'
import { Button } from 'src/Styles/Styles'
import styled from 'styled-components'

export const CountryDetailStyled = styled.div`
  img{
    width: 100%;
    height: auto;
    margin-top: 12px;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.05);
  }
  h3{
    margin-top: 35px;
  }
  h6{
    display: inline-block;
  }
  span{
    display: inline;
  }
  .aling {
    margin: 0 auto !important;
  }
  @media (min-width: 768px){
    h3{
      margin: 0;
      margin-bottom: 10px;
    }
    margin-top: 40px;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    img{
      margin: 0
    }
    div.container-country-info{
      display: grid;
      align-content: center;
      margin: 0 auto;
    }
  }
  @media (min-width: 992px) {
    div.country-info{
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: 10px;
    }
  }
`

export default function SingleCountry({ capital }) {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getSingleCountry(capital)
      .then(singleCountry => setCountry(singleCountry[0]))
  }, [capital])

  return (
    <>
      {country ?
          <CountryDetailStyled>
            <div>
              <img src={country.flag} alt={country.name} />
            </div>

            <div className="container-country-info">
              <h3><strong>{country.name}</strong></h3>
              <div className="country-info">
                <div className="aling">
                  <p><strong>Native Name: </strong>{country.nativeName}</p>
                  <p><strong>Population: </strong>{country.population}</p>
                  <p><strong>Region: </strong>{country.region}</p>
                  <p><strong>Sub Region: </strong>{country.subregion}</p>
                </div>
                <div className="aling">
                  <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
                  <p><strong>Currencies: </strong>
                    {country.currencies.length > 1 ?
                      country.currencies.map(({ name }) => `${name}, `)
                      : country.currencies.map(({ name }) => name)
                    }</p>
                  <p><strong>Languages: </strong>
                    {country.languages.length > 1 ?
                      country.languages.map(({ name }) => `${name}, `)
                      : country.languages.map(({ name }) => name)
                    }
                  </p>
                </div>
              </div>
                <div>
                  <h6><strong>Border Countries: </strong></h6>
                  {country.borders.length > 0 ?
                    country.borders.map(border => <Button key={border} size="small">{border}</Button>)
                    : <span>  Has no borders</span>
                  }
                </div>
            </div>
          </CountryDetailStyled>
          : null}
    </>
  )
}
