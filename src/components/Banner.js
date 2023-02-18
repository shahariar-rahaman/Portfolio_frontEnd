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
        <Carousel.Caption>
          <h3 className='slide-caption'>Take Off Programming contest Fall 2018</h3>
          <p>This was my first achievement at university (Position 6th)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="itemSize">
        <img
          className="d-block w-100 size"
          src="https://res.cloudinary.com/drzqify5h/image/upload/v1676737173/IMG_20211012_092432_1_nezvra.jpg"
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3 className='slide-caption'>CTG Tour</h3>
          <p>It was a good day (Chandranath Hill)</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="itemSize">
        <img
          className="d-block w-100 size"
          src="https://res.cloudinary.com/drzqify5h/image/upload/v1676736673/IMG_20230209_091148_uuxwwr.jpg"
          alt="Third slide"
        />
      </div>
      <Carousel.Caption>
          <h3 className='slide-caption'>DIU 10th Convocation 2023</h3>
          <p>Now I can say I've earned my degree.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner