import React, { useState } from 'react'
import './Search.css'
import "react-date-range/dist/styles.css" //main style
import "react-date-range/dist/theme/default.css" //theme CSS 

import { DateRangePicker } from "react-date-range"
import { Button } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People';
import { useHistory } from 'react-router-dom'

function Search() {

  const history = useHistory()
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate : startDate,
    endDate : endDate,
    key : "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
    
  return (
    <div className='search'>
       <DateRangePicker  ranges={[selectionRange]}
          onChange = {handleSelect}
       />
       <h2>
          Number of guests
          <PeopleIcon/>
       </h2>
       <input min={0} defaultValue={2} type="number"/>
       <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search
