import React from 'react'
import CountryList from 'src/components/CountryList'
import NavSearchAndFilter from 'src/components/NavSearchAndFilter'

export default function Home() {
  return (
    <>
      <NavSearchAndFilter/>
      <CountryList/>
    </>
  )
}
