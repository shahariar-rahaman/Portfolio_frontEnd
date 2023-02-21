import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaLink} from 'react-icons/fa';
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
const Basic = () => {
  const [basicData,setBasicData] = useState([])
  const URL=process.env.REACT_APP_BASE_URL
  useEffect(()=>{
    async function basic(){
      let {data} = await axios.get(`${URL}/basicPost`)
      setBasicData(data)
    }
    basic()
  },[])
  return (
    <>
   <Container className='mt-5'>
        <p ley={12} className="figmaProject">Others Project</p>
        <Row>
        {
            basicData.map(item=>(
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
                <Button className='mt-3 cardButton d-flex align-items-center' href={item.link}><FaLink/><span className="visit">Visit</span></Button>
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