import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className='home'>
       <Banner/>   

       <div className='home__section'>
          <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-717134404264905813/original/dfe9fd1e-a010-43c9-b546-0bbc7d59f7f3.jpeg?im_w=960"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>

          <Card src="https://a0.muscache.com/im/pictures/59599630-a8ce-4082-aa31-de0984288d48.jpg?im_w=720"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>

          <Card src="https://a0.muscache.com/im/pictures/cdd7fa47-2b40-4593-be79-3ca6757f25bc.jpg?im_w=720"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>
       </div>
       
       <div className='home__section'>
          <Card src="https://a0.muscache.com/im/pictures/31a63a14-78ac-4ecc-ba18-e01cc95969b1.jpg?im_w=720"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>

          <Card src="https://a0.muscache.com/im/pictures/bf7a3075-4953-4b8e-8b02-f732ab7b4c2a.jpg?im_w=720"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>
          
          <Card src="https://a0.muscache.com/im/pictures/59599630-a8ce-4082-aa31-de0984288d48.jpg?im_w=720"
          title="Entire Home" 
          description="Hidden Haven - 5 Bed Villa with pool & Sea Views"
          price="₹41,358 night"/>
       </div>

    </div>
  )
}

export default Home
