import React from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
import figma from '../data/figmaData'
import { useState,useEffect } from 'react'
import axios from 'axios'
const ReactProject = () => {
  const [reactData,setReactData] = useState([])
  useEffect(()=>{
    async function react(){
      let {data} = await axios.get("http://localhost:8000/reactEdit")
      setReactData(data)
    }
    react()
  },[])
  return (
    <>
        <Container className='mt-5'>
        <h1>React Project</h1>
        <Row>
        {
            reactData.map(item=>(
                <Col lg={3} className="mt-4">
                <Card >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                  <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                {item.project.map((items) => (
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "5px",
                  }}
                >
                  {items}
                </span>
              ))}
                <div className='d-flex justify-content-center'>
                <Button variant="primary">Visit</Button>
                </div>
              </Card.Body>
            </Card>
            </Col>
            ))
        }
    </Row>
        </Container>
    </>
  )
}

export default ReactProject