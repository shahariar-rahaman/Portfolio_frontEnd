import React from 'react'
import Banner from '../components/Banner';
import FigmaProject from '../components/FigmaProject';
import ReactProject from '../components/ReactProject';
import Basic from '../components/Basic'

const Home = () => {
  return (
    <div key={7} className='homeBackground'>
   <Banner/>
   <FigmaProject/>
   <ReactProject/>
   <Basic/>
    </div>
  )
}

export default Home