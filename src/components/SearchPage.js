import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import CountryList from './CountryList'

const SearchPage = (props) => {
  const [input, setInput] = useState('')
  const [countryListDefault, setCountryListDefault] = useState()
  const [countryList, setCoutryList] = useState()
  
  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      setCoutryList(data)
      setCountryListDefault(data)
    })
  }
  
  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setCoutryList(filtered)
  }
  
  useEffect( () => {fetchData()}, [])
  
  return (
    <div>
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <h1>Country List</h1>
      <CountryList countryList={countryList}/>
    </div>
  )
}



export default SearchPage