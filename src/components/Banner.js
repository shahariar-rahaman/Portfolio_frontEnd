import React from 'react'
import { Carousel } from 'react-bootstrap'
const Banner = () => {
  return (
  <div >
    <Carousel fade >
      <Carousel.Item>
      <div className="itemSize">
        <img
          className="d-block w-100 size"
          src="https://res.cloudinary.com/drzqify5h/image/upload/v1676736396/DSC_0299_oopyaj.jpg"
          alt="First slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="itemSize">
        <img
          className="d-block w-100 size"
          src="https://res.cloudinary.com/drzqify5h/image/upload/v1676736564/IMG_20220331_132551_gv3ery.jpg"
          alt="Second slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="itemSize">
        <img
          className="d-block w-100 size"
          src="https://res.cloudinary.com/drzqify5h/image/upload/v1676736673/IMG_20230209_091148_uuxwwr.jpg"
          alt="Third slide"
        />
      </div>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner