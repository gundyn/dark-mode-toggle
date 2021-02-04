import React, { useState } from 'react'

const SearchBar = ({input:keyword, onChange:setKeyword})  => {
  // console.log('SearchBar props: ', props)
  const BarStyling = {width:"20rem", background:"#F2F1F9", border:"none", padding:"0.5rem" }
  // const [keyword, setKeyword] = useState()
  
  
  
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

export default SearchBar