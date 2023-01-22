import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container,Card,Button,Row,Col } from 'react-bootstrap'
import { FaLink} from 'react-icons/fa';

const FigmaProject = () => {
  const [figmaData,setFigmaData] = useState([])
  const URL=process.env.REACT_APP_BASE_URL
  useEffect(()=>{
    async function figma(){
      let {data} = await axios.get(`${URL}/figmaEdit`)
      setFigmaData(data)
    }
    figma()
  },[])
  return (
    <>
    <Container className='mt-5'>
        <p className="figmaProject">Figma Project</p>
        <Row>
        {
            figmaData.map(item=>(
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
                <Button className='mt-3 cardButton d-flex align-items-center'><FaLink/><span className="visit"><a htef='https://www.figma.com/proto/aBksKQCIV2nk6jsOSaccjl/Bonsin?node-id=2%3A2'>Visit</a></span></Button>
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