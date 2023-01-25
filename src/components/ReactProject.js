import React from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { FaLink} from 'react-icons/fa';
const ReactProject = () => {
  const [reactData,setReactData] = useState([])
  const URL=process.env.REACT_APP_BASE_URL
  useEffect(()=>{
    async function react(){
      let {data} = await axios.get(`${URL}/reactPost`)
      setReactData(data)
    }
    react()
  },[])
  return (
  <div className="reactBackround">
        <Container>
    <div key={8} className="mt-5 reactPadding">
        <p className="figmaProject">React Project</p>
        <Row>
        {
            reactData.map(item=>(
                <Col lg={3} className="mt-4" key={item._id}>
                <Card className='cardShadow h-100'>
              <Card.Img className="image-height" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title><span className='cardTitle'>{item.title}</span></Card.Title>
                  <span className="description"><p dangerouslySetInnerHTML={{ __html: item.description }}></p></span>
                {item.project.map((items) => (
                <span
                  className="tag"
                >
                  {`${items} `}
                </span>
              ))}
                <div className="d-flex justify-content-center">
                <Button className='mt-3 cardButton d-flex align-items-center'><FaLink/><span className="visit">Visit</span></Button>
                </div>
              </Card.Body>
            </Card>
            </Col>
            ))
        }
    </Row>
    </div>
        </Container>
        </div>
  )
}

export default ReactProject