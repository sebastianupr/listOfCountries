import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'src/Styles/Styles'
import { useParams } from 'react-router-dom'
import SingleCountry from 'src/components/SingleCountry'

export default function CountryDetail() {
  const history = useHistory()
  const params = useParams()
  const { capital } = params

  return (
    <>
      <div className="container">
        <Button onClick={() => history.push('/')}>
          <i className="fas fa-arrow-left"></i> Back
        </Button>

        <SingleCountry capital={capital}/>
      </div>
    </>
  )
}
