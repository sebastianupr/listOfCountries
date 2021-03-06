import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const CountryStyled = styled.label`
  margin: 10px auto;
  width: 264px;
  background-color: var(--white);
  align-items: center;
  text-align:left;
  border-radius:5px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
  cursor: pointer;
  a{
    text-decoration: none;
    color: var(--black);
  }
  img{
    width:100%;
    height: 160px;
    object-fit: cover;
  }
  .details{
    padding: 1.5em;
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size:18px;
  }
  p{
    font-size: .9em;
    margin-bottom: .5em;
  }
`

export default function Country({
  flag,
  name,
  capital,
  region,
  population
}) {
  return (
    <CountryStyled>
      <Link to={`/country/${capital}`}>
        <img loding="lazy" src={flag} alt={name}/>
        <div className="details">
          <h2>{name}</h2>
          <p><strong>Population: </strong>{population}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Capital: </strong>{capital}</p>
        </div>
      </Link>
    </CountryStyled>
  )
}
