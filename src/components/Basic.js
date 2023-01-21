import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
const Basic = () => {
  const [basicData,setBasicData] = useState([])
  useEffect(()=>{
    async function basic(){
      let {data} = await axios.get("http://localhost:8000/basic")
      setBasicData(data)
      console.log(data)
    }
    basic()
  },[])
  return (
    <>
    <Container className='mt-5'>
        <h1>Basic</h1>
        <Row>
        {
            basicData.map(item=>(
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

export default Basic