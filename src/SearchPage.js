import { Button } from '@mui/material'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 Stays · 26 august to 30 august · 2 guest</p>
            <h1>Stays nearby</h1>

            <Button variant='outlined'> Cancellation Flexibility </Button>
            <Button variant='outlined'> Type of place </Button>
            <Button variant='outlined'> Price </Button>
            <Button variant='outlined'> Rooms and beds </Button>
            <Button variant='outlined'> More filters </Button>

        </div>
 
        <SearchResult 
          img="https://a0.muscache.com/im/pictures/monet/Luxury-53856003/original/a9045607-396d-4851-b283-8e6ba90bccda?im_w=960"
          location="Private room in center of London"
          title="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          description="10 guests5 bedrooms5 beds3 bathrooms"
          star={5.0}
          price="₹41,643 night"
          total="₹41,643 night"
        />

        <SearchResult 
          img="https://a0.muscache.com/im/pictures/monet/Luxury-53856003/original/6c983921-6d49-4f0d-bc9c-82407e496211?im_w=720"
          location="Private room in center of London"
          title="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          description="10 guests5 bedrooms5 beds3 bathrooms"
          star={5.0}
          price="₹41,643 night"
          total="₹41,643 night"
        />

        <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-637423625053383689/original/3b800895-f524-4afc-8385-44bb0831e8a3.jpeg?im_w=720"
          location="Private room in center of London"
          title="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          description="10 guests5 bedrooms5 beds3 bathrooms"
          star={5.0}
          price="₹41,643 night"
          total="₹41,643 night"
        />

        <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-53488682/original/5f6571e9-3426-47b7-9f7d-e011a279487a.jpeg?im_w=720"
          location="Private room in center of London"
          title="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          description="10 guests5 bedrooms5 beds3 bathrooms"
          star={5.0}
          price="₹41,643 night"
          total="₹41,643 night"
        />
    </div>
  )
}

export default SearchPage
