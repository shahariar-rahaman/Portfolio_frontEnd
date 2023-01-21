import React from 'react'
import { Carousel } from 'react-bootstrap'
const Banner = () => {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src="https://images.unsplash.com/photo-1673942393203-fe61f45b4479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src="https://images.unsplash.com/photo-1671725501844-1e6d0081bf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 size"
          src="https://images.unsplash.com/photo-1671725779305-bff966b40cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner