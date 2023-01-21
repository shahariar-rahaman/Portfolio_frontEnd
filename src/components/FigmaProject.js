import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
const FigmaProject = () => {
  const [figmaData,setFigmaData] = useState([])
  useEffect(()=>{
    async function figma(){
      let {data} = await axios.get("http://localhost:8000/figmaEdit")
      setFigmaData(data)
    }
    figma()
  },[])
  return (
    <>
    <Container className='mt-5'>
        <h1>Figma Work</h1>
        <Row>
        {
            figmaData.map(item=>(
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

export default FigmaProject